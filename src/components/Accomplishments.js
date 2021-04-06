import React, {Component} from 'react'
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
    Heading} from '@chakra-ui/react'


class Accomplishments extends Component{
constructor(){
    super()
    this.state = {
        id: 0,
        skills: '',
        accomplishments: [],
        editing: false

    }
}

componentDidMount(){
    this.getSkills()
}


getSkills=()=>{
    axios.get('/api/careerSkills')
    .then(res => {
        this.setState({
            accomplishments: res.data
        })
    }).catch(err => console.log(err))
    }


    postSkills=(skills)=>{
        axios.post('/api/careerSkills', {skills}) 
        .then(res => {
            console.log(res.data)
            this.setState({
                accomplishments: res.data,
                skills: ''
                
            })
        }).catch(err => console.log(err))
        }

        updateSkills= (id, skills) =>{
            axios.put(`/api/careerSkills/${id}`, {skills}) 
            .then(res => {
                console.log(res.data)
                this.setState({
                    accomplishments: res.data
                })
            }).catch(err => console.log(err))
            }
    


  deleteSkills = id =>{
      axios.delete(`/api/careerSkills/${id}`)
      .then(res => {
          this.setState({
                accomplishments: res.data
          })
      }).catch(err => console.log(err))
  }      


 handleChange= e =>{
     console.log(e)
    this.setState({skills: e})
 }  
        

handleEdit=()=>{
this.setState({editing: true}) 
}



render(){

    return(


        <> 

        <Container maxW='lg' centerContent>
        <Box padding='5' bg='gray.100'>

            
            <h1 className="accompHeader">Career Accomplishments</h1>
           
            
            <Input  isRequired 
                    type="text" 
                    value={this.state.skills}
                   onChange={(e)=>this.handleChange(e.target.value)}/>
           
            <Button variant='solid' colorScheme='teal' size='sm' onClick={()=>this.postSkills(this.state.skills)}>Submit</Button>
          
            <ul>
            {this.state.accomplishments.map(accomp => {
             return <Edit key={accomp.id} accomp={accomp} deleteSkills={this.deleteSkills} updateSkills={this.updateSkills} handleChange={this.handleChange} skills={this.state.skills}/> })}
             {/* return <ul key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleEdit(e)}>Edit</button></ul> })} */}</ul>
            
             </Box>
             </Container>
            

        </>
    )
}
}

export default Accomplishments