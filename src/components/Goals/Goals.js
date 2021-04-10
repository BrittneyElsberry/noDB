import {useState, useEffect} from 'react'
import {Box, Flex, Button, Input, Form, FormControl, FormLabel, Container, Spacer} from '@chakra-ui/react'
import axios from 'axios'
import Moment from 'react-moment'
import Comments from './Comments'

const Goals =()=>{


const [goal, setGoal] = useState('')
const [startDate, setStartDate] =useState('')
const [endDate, setEndDate] = useState('')
const [allGoals, setAllGoals] = useState([])


useEffect(()=>{
getGoals()

},[])

const getGoals = ()=>{
    axios.get(`/getgoals`)
    .then(res=> {
        setAllGoals(res.data)
    })
}


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
    
     <Flex direction='column'>
         <Container maxW='md' width='100%' height='50vh'>
        <Box padding='10'  bg='gray.100' d='flex'>
            
            <form method="POST" onSubmit={submitGoal}>
                
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
                <Button size='xs' type='submit' className="goalsSubmitbtn">Submit</Button>
                </FormControl>
                
            </form>
        </Box>

        <Box className='goalList'>


        </Box>
        </Container>

        <Container maxW='md' width='100%' height='50vh'>
        <Box padding='10'  bg='gray.100' d='flex' >
            <ul >

        {   allGoals &&
            allGoals.map((goal)=>{
                return <li className='goalContainer' key={goal.goal_id}>{goal.goal} 
                <Spacer/>
                <p className='date'> Start Date <Moment format='MM/DD/YYYY'>{goal.start_date}</Moment></p>
                <p className='date'>Goal Completion <Moment format='MM/DD/YYYY'>{goal.end_date}</Moment></p> 
                <Comments goal_id={goal.goal_id} />
                </li>
            })
        }

            </ul>


        </Box>

        </Container>



    </Flex>   
    
    )
}




export default Goals