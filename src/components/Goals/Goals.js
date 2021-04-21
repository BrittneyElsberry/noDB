import {useState, useEffect} from 'react'
import {Box, Flex, Button, Input, FormControl, Container} from '@chakra-ui/react'
import axios from 'axios'
import Moment from 'react-moment'
import Comments from './Comments'
import Header from '../Header'

const Goals =()=>{


const [goal, setGoal] = useState('')
const [startDate, setStartDate] =useState('')
const [endDate, setEndDate] = useState('')
const [allGoals, setAllGoals] = useState([])
const [index, setIndex] = useState(0)


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

 

    console.log(allGoals, 'empty')


    return(
    <>
         <Header/>
            <Flex direction='row'>
                <Container maxW='md' width='100%'>
                    <Box padding='10'  bg='gray.100' d='flex' height='80vh'>
                
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



        </Container>

            <Container maxW='md' width='100%' height='80vh' d='flex' direction='column'>
                <Box padding='1'  bg='gray.100' d='flex' direction='column'>

               

                    <Container className='display-Goals' p={'10'}>

                    {allGoals && index < allGoals.length && <h1>{allGoals[index].goal}</h1>}
                    <br></br>


                
                    <div className='date'>{allGoals && index < allGoals.length && <p> Start Date: <Moment format='MM/DD/YYYY'>{allGoals[index].start_date}</Moment></p>}</div>
                    <div className='date'>{ allGoals && index < allGoals.length && <p> Goal Completion: <Moment format='MM/DD/YYYY'>{allGoals[index].end_date}</Moment></p> }</div>
                    <br></br>
                    <div>{ allGoals && index < allGoals.length && <Comments goal_id={allGoals[index].goal_id} index={index} setIndex={setIndex} allGoals={allGoals} />}</div>
                    </Container>
                </Box>
            </Container>
    </Flex>   
    </>
    )
}




export default Goals