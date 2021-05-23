// import {useState} from 'react'
// import Main from './Main'
// import axios from "axios";
import {
    Container,
    Box,
    } from '@chakra-ui/react'




const JobListing = (props)=> {
// console.log(props)

// const [job, setJobs] = useState([])



//----REMOTIVE API ---- CORS error 

//(`https://remotive.io/api/remote-jobs`) 


// useEffect(()=>{
//   axios.get(`https://remotive.io/api/remote-jobs?category=software-dev`) 
//   .then(res=>{
//     console.log(res.data,'useEffect Jobs data')
//     setJobs(res.data)
    
//   }).catch(err=> console.log(err))
  

// },[])


  
    return (
        <div>
            <Container maxW='md' height='100%'>
            <Box padding='5' bg='gray.100' overflowY='scroll' height='80vh'>

            <h1 className="jlheader ">Job Listing testing changes</h1>
            <br></br>
            <p className="descrip">Company: </p> <p className='descrip'>{props.jobListing.company}</p> 
            <br></br>
           
            <p className="descrip">Job Title:</p> <p className="jobContent">{props.jobListing.jobtitle}</p>
            <br></br>
            <p className="descrip" >About: </p> <p className="jobContent"> {props.jobListing.about}</p>
            <br></br>
            <p className="descrip">Responsibilities: </p> <p className='jobContent'>{props.jobListing.responsibilities}</p>
            <br></br>
            
            <p className="descrip"> Skill Requirements:</p> 
           

            {props.jobListing.skillrequirements ? (
                         <ul className='jobContent'><li>{props.jobListing.skillrequirements[0]}</li>
                         <li>{props.jobListing.skillrequirements[1]}</li>
                         <li>{props.jobListing.skillrequirements[2]}</li>
                         <li>{props.jobListing.skillrequirements[3]}</li>
                         <li>{props.jobListing.skillrequirements[4]}</li>
                         <li>{props.jobListing.skillrequirements[5]}</li>
                         <li>{props.jobListing.skillrequirements[6]}</li> 
             </ul>

             ) : null }
    
            <br></br>
            <p className="descrip">Technical Knowledge Requirements: </p>
           
            {props.jobListing.technicalknowledgerequirements ? (

            <ul className='jobContent'><li>{props.jobListing.technicalknowledgerequirements[0]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[1]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[2]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[3]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[4]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[5]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[6]}</li>

            </ul> ) : null }
            
            <br></br>
            <p className="descrip">Employement Type:</p> <p className='jobContent'>{props.jobListing.employmenttype}</p>
            <br></br>
            <p className="descrip">Seniority Level: </p> <p className='jobContent'>{props.jobListing.senioritylevel}</p>
            <br></br>
            </Box>
            </Container>
        </div>
    )

}

export default JobListing
