import {useState, useEffect} from 'react'
import {Box, Flex, Button, Input, Form, FormControl} from '@chakra-ui/react'
import axios from 'axios'

const Goals =()=>{


const [goal, setGoal] = useState('')
const [startDate, setStartDate] =useState('')
const [endDate, setEndDate] = useState('')
const [comment, setComment] = useState('')
const [allComments, setAllComments] = useState([])
const [allGoals, setAllGoals] = useState([])


const submitGoal = (formSubmit)=>{
    formSubmit.preventDefault()
    console.log(goal, startDate, endDate)

    axios.post(`/addgoal`, {goal, startDate, endDate})
    .then(res=> {
        console.log(res.data, 'submit goal res.data')
        setAllGoals(res.data)
    })
    .catch(error=> console.log(error))

}


    return(
    
     <Flex>
         
        <Box padding='10'  bg='gray.100' h='100vh' w='40vw'>
            
            <form onSubmit={submitGoal}>
                
                <h1 className="goalsHeader">Goals</h1>
                <FormControl>
                <Input  isRequired
                        size='xs' 
                        className="goalsInput" 
                        type='text'
                        value={goal}
                        onChange={(e)=>setGoal(e.target.value)}/>
            </FormControl>
            
            <Box d='flex' direction='row' >

            <FormControl>
                <Button size='xs' className="startDatebtn">Start Date</Button> 
                <Input 
                    isRequired
                    size='xs' 
                    w='100%' 
                    className="sdinput" 
                    type='date' 
                    value={startDate}
                    onChange={(e)=>setStartDate(e.target.value)}/>
            </FormControl>

            <FormControl>
                <Button size='xs' className="endDatebtn">End Date</Button>
                <Input 
                    isRequired
                    size='xs' 
                    w='100%'  
                    className="edinput" 
                    type='date'
                    value={endDate} 
                    onChange={(e)=>setEndDate(e.target.value)} />
            </FormControl>

            </Box>
                <FormControl>
                <Button size='xs' className="goalsSubmitbtn">Submit</Button>
                </FormControl>
                
            </form>
        </Box>

        <Box className='goalList'>
            <ul>

        {   
            allGoals.map((goal)=>{
                return <li key={goal.goal_id}>{goal.goals}</li>
            })
        }

            </ul>


        </Box>
    </Flex>   
    
    )
}




export default Goals