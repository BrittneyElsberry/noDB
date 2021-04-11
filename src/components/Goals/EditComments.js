import Comments from './Comments'
import {useState, useEffect} from 'react'
import {Input, Button} from '@chakra-ui/react'

const EditComments = (props)=>{

    const [newComment, setNewComment] = useState('')
    const {editing, editComment} = props

return (

            <> 
            { editing ? (

                <div>
                <Input 
                size='xs'
                onChange={(e)=>setNewComment(e.target.value)}
                
                />
                <Button size='xs' 
                        colorScheme='teal'
                        onClick={()=>editComment()}
                        >Save</Button>
                </div>

            )
                    : null

            }
            

            </>
            
            
        )
}

export default EditComments