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

    const goalsIndexNext = ()=>{


    }

    const goalsIndexPrevious = ()=>{

    }

    console.log(allGoals, 'empty')


    return(
    
     <Flex direction='row'>
       
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

                <Container maxW='md' width='100%' height='80vh' d='flex' direction='column'>
                <Box padding='1'  bg='gray.100' d='flex' direction='column'>

                    {/* <ul > */}

                        {/* {
                            allGoals &&
                        <p>{ allGoals[index]} </p> 
                            
                        } */}
        {/* 
                {   allGoals &&
                    allGoals.map((goal)=>{
                        return <li className='goalContainer'  key={goal.goal_id}>{goal.goal[0]} 
                        
                        <p className='date'> Start Date  <Moment format='MM/DD/YYYY'>{goal.start_date}</Moment></p>
                        <p className='date'>Goal Completion <Moment format='MM/DD/YYYY'>{goal.end_date}</Moment></p> 
                        <br></br>
                        <br></br>
                        <Comments goal_id={goal.goal_id} />
                        </li>
                        
                    })
                } */}

                    {/* </ul> */}

                    <Container className='display-Goals' p={'10'}>

                    {allGoals && index < allGoals.length && <h1>{allGoals[index].goal}</h1>}


                
                    <div>{allGoals && index < allGoals.length && <p className='date'> Start Date  <Moment format='MM/DD/YYYY'>{allGoals[index].start_date}</Moment></p>}</div>
                    <div>{ allGoals && index < allGoals.length && <p className='date'> Goal Completion <Moment format='MM/DD/YYYY'>{allGoals[index].end_date}</Moment></p> }</div>
                    <div>{ <Comments goal_id={goal.goal_id} />}</div>
            
                    
                                
                                <Box bg='blue'className='prev-next-buttons' p={10} >
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
                            </Box>
                </Container>


    </Flex>   
    
    )
}




export default Goals