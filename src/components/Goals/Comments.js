import Goals from './Goals'
import {useState, useEffect} from 'react'
import {Box, Flex, Container, Input, Button} from '@chakra-ui/react'
import axios from 'axios'
import Moment from 'react-moment'
import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

const Comments = (props)=>{

    const [comment, setComment] = useState('')
    const [allComments, setAllComments] = useState([])

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

 console.log(props.goal_id, 'props or not props')
 console.log(comment, 'comment in state')
    return (
        <>
        <Flex>
            <Container>
                    <Box padding={4}>
                    <Input  placeholder='comment on your progress'
                            size='xs'
                            type='text'
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}  
                    />
                    <Button size='xs' 
                            onClick={()=>submitComment(props.goal_id, comment)}
                    >Save</Button>
                    </Box>

            {allComments && 
                allComments.map(allC=>{
                    return <li key={allC.comment_id} className='commentList'>{allC.comment} <Moment format='MM/DD/YYYY'>{allC.date}</Moment> 
                                                                    <Button size='xs'><MdDelete/></Button> 
                                                                    <Button size='xs'><AiFillEdit/></Button>
                            </li>
                })
            }

            </Container>



        </Flex>
        </>
    )

}
export default Comments