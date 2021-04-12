import React, {Component, useState, useEffect} from 'react'
// import Main from './Main'
import axios from 'axios'
import Edit from './Edit'
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
    Heading,
    Flex,
    Spacer} from '@chakra-ui/react'
// import { getSkills } from '../../server/skillsController'


const Accomplishments =()=>{


const [skills, setSkills] = useState('')
const [accomplishments, setAccomplishments] = useState('')
const [editing, setEditing] = useState(false)



            useEffect(()=>{
            getSkills()

            }, [])




        const getSkills=()=>{
            axios.get('/getskills')
            .then(res => {
                console.log(res.data)
                setAccomplishments(res.data)
            
            }).catch(err => console.log(err))
            }


        const  addSkills=(skills)=>{
                axios.post('/addskills', {skills}) 
                .then(_=> {
                
                    getSkills()
                    
            
                }).catch(err => console.log(err))
                }

        const  editSkills= (id, skills) =>{
                    axios.put(`/editskills/${id}`, {skills}) 
                    .then(res => {
                    
                        setAccomplishments(res.data)
                    
                    })  
                        .catch(err => console.log(err))
                    }
            
                    
                    const deleteSkills = id =>{
                        axios.delete(`/deleteskills/${id}`)
                        .then(_ => {
                            getSkills()
                        }).catch(err => console.log(err))
                    }      
                    
                    
                    const handleChange= e =>{
                        console.log(e)
                        setSkills(e)
                        
                    }  
                    
                    
                    const handleEdit=()=>{
                        setEditing(true)
                    }
                    
                    
                    console.log(accomplishments, 'after editing')
            
            return(
                

        <> 
       
        <Container >
        <Box padding='5' bg='gray.100' overflowY='scroll' height='80vh' width='40vw' className='accomp-box'>

            
            <h1 className="accompHeader">Career Accomplishments</h1>
           <br></br>
            
            <Input  size='xs'
                    isRequired 
                    type="text" 
                    value={skills}
                   onChange={(e)=>handleChange(e.target.value)}/>
       
            <Button variant='solid' colorScheme='teal' size='xs' p={2} onClick={()=>addSkills(skills)}>Submit</Button>
          

         
            <ul className='listBox' >
            { accomplishments &&
            
            accomplishments.map(accomp => {
             return  <li key={accomp.accomp_id} className='accomp-list-items'>
                     <Edit accomp={accomp.accomplishments} id={accomp.accomp_id} deleteSkills={deleteSkills} editSkills={editSkills} handleChange={handleChange} skills={skills}/> </li> })}
             {/* return <ul key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleEdit(e)}>Edit</button></ul> })} */}</ul>
            
            
             </Box>
             </Container>
            

        </>
    )
}


export default Accomplishments