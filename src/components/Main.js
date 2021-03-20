import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import Accomplishments from './Accomplishments'
import JobListing from './JobListing'
import Goals from './/Goals'

class Main extends Component {
constructor(){
    super()
    this.state = {
      goals: [{goalName: '', startDate: '', endDate: '', goalID: 0, complete: false}],
      careerS: [{careerSId: 0, careerSName: ''}],
      jobListing: {},
      myNextRole: '',
      savedRole: ''   

    }
}


componentDidMount(){
  this.getJobListing()
  
}


getJobListing=()=>{
  axios.get('/api/jobListing') 
  .then(res => {
    console.log(res.data)
      this.setState({
          jobListing: res.data
      })
  }).catch(err => console.log(err))
  }


  getMyRole=()=>{
    axios.get('/api/myRole') 
    .then(res => {
      console.log(res.data)
        this.setState({
            myNextRole: res.data
        })
    }).catch(err => console.log(err))
    }


    postmyRole=(roleTitle)=>{
      axios.post('/api/myRole', {roleTitle}) 
      .then(res => {
          console.log(res.data)
          this.setState({
              savedRole: res.data,
              myNextRole: ''
      
          })
      }).catch(err => console.log(err))
      
      
      }

      handleRoleChange=(e)=>{
        this.setState({myNextRole: e.target.value})
      }


render(){

console.log(this.state)

return(

<div>

<Header myNextRole={this.state.myNextRole} displayRole={this.displayRole} handleRoleChange={this.handleRoleChange} postMyRole={this.postmyRole} savedRole={this.state.savedRole}/>
      <div className="mainContainer">
      <JobListing jobListing={this.state.jobListing} />
    <div className="goalsAndAccompContainer">
      <Goals />
      <Accomplishments />
      </div>
</div>
</div>
)
}
}

export default Main