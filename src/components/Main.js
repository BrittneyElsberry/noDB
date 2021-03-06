import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import Accomplishments from './Accomplishments'
import JobListing from './JobListing'
import {Box, Heading, Input, Button, Flex} from '@chakra-ui/react'
import {TiDeleteOutline} from 'react-icons/ti'


class Main extends Component {
constructor(){
    super()
    this.state = {
      goals: [{goalName: '', startDate: '', endDate: '', goalID: 0, complete: false}],
      careerS: [{careerSId: 0, careerSName: ''}],
      jobListing: {},
      myNextRole: '',
      savedRole: []   

    }
}


componentDidMount(){
  this.getJobListing()
  this.getMyRole()
  
}


getJobListing=()=>{
  axios.get('/api/jobListing') 
  .then(res => {
    // console.log(res.data)
      this.setState({
          jobListing: res.data
      })
  }).catch(err => console.log(err))
  }


  getMyRole=()=>{
    axios.get('/myrole') 
    .then(res => {
      console.log(res.data, 'getmyrole')
        this.setState({
            savedRole: res.data
        })
    }).catch(err => console.log(err))
    }


    postMyRole = (role) =>{
      axios.post(`/addmyrole`, {role}) 
      .then(res => {
          console.log(res.data, 'did it work?')
          this.setState({
              savedRole: res.data,
              myNextRole: ''
      
          })
      }).catch(err => console.log(err))
      
      
      }


      deleteMyRole =()=>{
        axios.delete(`/`)
      }


      handleRoleChange=(e)=>{

        this.setState({myNextRole: e.target.value})
      }


render(){

// console.log(this.state.savedRole, 'savedRole')

return(

<>





      <Header myNextRole={this.state.myNextRole} displayRole={this.displayRole} 
              handleRoleChange={this.handleRoleChange} postMyRole={this.postmyRole} 
              savedRole={this.state.savedRole}/>

    
          <Box className='my-role-flex-box'>
              <Box className='my-role-box' >
                <Heading  className='my-next-role' size='md' ml='20'>My Next Role </Heading> 
                  <br></br>
                <Box id='inputandsave'>
                <Input size='xs' 
                      className='my-next-role-input' 
                      value={this.state.myNextRole} onChange={(e)=>this.handleRoleChange(e)}/> 
               
                <Button className="myRoleButton" 
                        size='xs' 
                        onClick={()=>this.postMyRole(this.state.myNextRole)}>
                          
                Save
                </Button>
                <Button className="myRoleButton" 
                        size='xs' 
                        onClick={()=>this.postMyRole(this.state.myNextRole)}>
                          
                X
                </Button>
               
            
                </Box>
                </Box>







              { this.state.savedRole[0] && (

                <Flex direction='row'>
                <Box>
                <Heading id="jobTitleDisplayed" size='lg' w='100%'>{this.state.savedRole[0].my_role} </Heading>
                
                </Box>
                </Flex>
            

              )
 
      

              }

                </Box>
      <div className="mainContainer">


      <JobListing jobListing={this.state.jobListing} />
      <div className="goalsAndAccompContainer">
  
      <Accomplishments />
      </div>
</div>
</>
)
}
}

export default Main