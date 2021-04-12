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
 
    const {index, allGoals, setIndex, goal_id} = props

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

 console.log(goal_id, 'props or not props')
 console.log(allComments, 'AllComments object')

 const filterComments = () =>{
     allComments.forEach(el =>{
        if(el.goal_id === goal_id){
            return el
        }
        console.log('returning el')

     })
    
 }


 console.log(goal_id, 'goal_id')
    return (
        <>
        <Flex>
            <Container >

          

            {/* {allComments && 
                allComments.map(allC=>{
                        return <li key={allC.comment_id} className='commentList'>
                         <EditComments editComment={editComment}  handleEdit={handleEdit} editing={editing} />

                                                    
                                                                    
                        
                                                                    <Box>
                                                                    <Moment format='MM/DD/YYYY'>{allC.goal_id.date}</Moment> 
                                                                    <Button size='xs'
                                                                            onClick={()=>editComment(allC.comment_id, goal_id)}
                                                                    ><AiFillEdit/></Button>
                                                                    <Button  size='xs'
                                                                             onClick={()=>deleteComment(allC.comment_id, goal_id)}   
                                                                    ><MdDelete/></Button> 
                                                                    </Box>
                           

                            </li>
                })
            } */}

        


            {/* {
                    allComments && allComments.map(allC => {
                    console.log(allC.goal_id, goal_id)
                    console.log('what the hell')
                    return allC.goal_id === goal_id ? 
                    <li>{allC.comment}
                    <Box>
                                                                    <Moment format='MM/DD/YYYY'>{allC.goal_id.date}</Moment> 
                                                                    <Button size='xs'
                                                                            onClick={()=>editComment(allC.comment_id, goal_id)}
                                                                    ><AiFillEdit/></Button>
                                                                    <Button  size='xs'
                                                                             onClick={()=>deleteComment(allC.comment_id, goal_id)}   
                                                                    ><MdDelete/></Button> 
                                                                    </Box>
                                                                    </li> 
                                                                    
                                                                    : null
                })
            } */}




{allComments && 
                
                allComments.filter(c=> {
                    console.log(c.goal_id, goal_id)

                    return c.goal_id === goal_id}).map(allC=>{
                    

                    if(allC.goal_id === goal_id){
                    
                    return <li key={allC.comment_id} className='commentList'>
                            {allC.comment}
                        <EditComments editComment={editComment}  handleEdit={handleEdit} editing={editing} />
                                                                    
                        
                                                                    <Box>
                                                                    <Moment format='MM/DD/YYYY'>{allC.goal_id.date}</Moment> 
                                                                    <Button size='xs'
                                                                            onClick={()=>editComment(allC.comment_id, goal_id)}
                                                                    ><AiFillEdit/></Button>
                                                                    <Button  size='xs'
                                                                             onClick={()=>deleteComment(allC.comment_id, goal_id)}   
                                                                    ><MdDelete/></Button> 
                                                                    </Box>
                           

                            </li> } 
                            
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
                            onClick={()=>submitComment(goal_id, comment)}
                    >Save</Button>
                    </Box>

                    <Box className='prev-next-buttons' p={10} >
                                <Button size='xs'
                                        onClick={()=>{
                                            if(index > 0 ){
                                                setIndex(index-1)
                                            }
                                        }}
                                        
                                        
                                        >Previous
                                </Button>

                                
                                <Button size='xs'
                                        onClick={()=>{
                                            
                                            if(index < allGoals.length){
                                                setIndex(index+1)
                                                
                                            } else if (index === allGoals.length){
                                                setIndex(0)
                                            }
                                        }
                                    }
                                    >Next
                                </Button>

                                </Box>




            </Container>



        </Flex>
        </>
    )

}
export default Comments