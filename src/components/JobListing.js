import React, {Component, useState, useEffect} from 'react'
import Main from './Main'
import axios from "axios";
import {Stack, 
    Button, 
    ButtonGroup,
    FormControl, 
    FormLabel, 
    Input, 
    InputGroup, 
    InputRightElement,
    FormHelperText, 
    Container,
    Box,
    Heading} from '@chakra-ui/react'




const JobListing = (props)=> {
console.log(props)



const options = {
  method: 'GET',
  url: 'https://job-listings.p.rapidapi.com/api/job/listing/',
  params: {url: 'https://www.indeed.com/q-data-scientist-l-silicon-valley-jobs.html'},
  headers: {
    'x-rapidapi-key': '8dd8bd2453msh1f14a9f4a3fff44p168554jsn062608cb284f',
    'x-rapidapi-host': 'job-listings.p.rapidapi.com'
  }
};


useEffect(()=>{

    axios.request(options)
    .then((response)=> {
        console.log(response.data, 'job listing API responses');
    }).catch((error)=> {
        console.error(error);
    });


}, [])


  
    return (
        <div>
            <Container maxW='sm'>
            <Box padding='5' bg='gray.100'>

            <h1 className="jlheader ">Job Listing</h1>
            <br></br>
            <p className="descrip">Company: </p> {props.jobListing.company}
            <br></br>
            <br></br>
            <p className="descrip">Job Title:</p> <span className="jobContent">{props.jobListing.jobtitle}</span>
            <br></br>
            <br></br>
            <p className="descrip" >About: </p> <span className="jobContent"> <br></br>{props.jobListing.about}</span>
            <br></br>
            <br></br>
            <br></br>
            <p className="descrip">Responsibilities: </p><br></br> {props.jobListing.responsibilities}
            <br></br>
            <br></br>
            <p className="descrip"> Skill Requirements:</p> 
            <br></br>
            {props.jobListing.skillrequirements ? (
                         <ul><li>{props.jobListing.skillrequirements[0]}</li>
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
            <br></br>
            {props.jobListing.technicalknowledgerequirements ? (

            <ul ><li>{props.jobListing.technicalknowledgerequirements[0]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[1]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[2]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[3]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[4]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[5]}</li>
            <li>{props.jobListing.technicalknowledgerequirements[6]}</li>

            </ul> ) : null }
            
            <br></br>
            <br></br>
            <p className="descrip">Employement Type:</p>{props.jobListing.employmenttype}
            <br></br>
            <br></br>
            <p className="descrip">Seniority Level: </p>{props.jobListing.senioritylevel}
            <br></br>
            </Box>
            </Container>
        </div>
    )

}

export default JobListing
