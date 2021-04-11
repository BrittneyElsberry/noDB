import Goals from './Goals'
import {useState, useEffect} from 'react'
import {Box, Flex, Container, Input, Button} from '@chakra-ui/react'
import axios from 'axios'
import Moment from 'react-moment'
import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import EditComments from './EditComments'

const Comments = (props)=>{

    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])
    const [editing, setEditing] = useState(false)

    useEffect(()=>{
        getComments()


    }, [])


const getComments = ()=>{
    axios.get(`/getcomments`)
    .then(res=>{
        setAllComments(res.data)
    })
    .catch(err=> console.log(err))

}


 const  submitComment =(id)=>{
    axios.post(`/addcomment/${id}`, {comment})
    .then(res=>{
        setAllComments(res.data)

    })
    .catch(err=> console.log(err))
 }

 const editComment =(id)=>{
     axios.put(`/editcomment/${id}`, {comment})
     .then(res=> {
         setAllComments(res.data)
         setEditing(false)
     })
     .catch(error=> console.log(error))
 }


 const handleEdit=()=>{
     setEditing(true)
 }


 const deleteComment = (id)=>{
     axios.delete(`/deletecomment/${id}`)
     .then(_=> console.log('deleted'))
     .catch(error=> console.log(error))
 }

 console.log(props.goal_id, 'props or not props')
 console.log(comment, 'comment in state')
    return (
        <>
        <Flex>
            <Container >

            {allComments && 
                allComments.map(allC=>{
                    return <li key={allC.comment_id} className='commentList'>
                         <EditComments editComment={editComment}  handleEdit={handleEdit} editing={editing} />
                        
                                                                {allC.comment} 
                                                                    <Box>
                                                                    <Moment format='MM/DD/YYYY'>{allC.date}</Moment> 
                                                                    <Button size='xs'
                                                                            onClick={()=>editComment(allC.comment_id, props.goal_id)}
                                                                    ><AiFillEdit/></Button>
                                                                    <Button  size='xs'
                                                                             onClick={()=>deleteComment(allC.comment_id, props.goal_id)}   
                                                                    ><MdDelete/></Button> 
                                                                    </Box>
                           

                            </li>
                })
            }
                    <Box className='commentBox' padding={2}>
                    <Input  
                            placeholder='comment on your progress'
                            size='xs'
                            type='text'
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}  
                    />
                    <Button size='xs' 
                            onClick={()=>submitComment(props.goal_id, comment)}
                    >Save</Button>
                    </Box>

            </Container>



        </Flex>
        </>
    )

}
export default Comments