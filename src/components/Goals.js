import React, {Component} from 'react'

class Goals extends Component {
constructor(){
    super()
}

render(){
    return(
    
    <div className="goalsContainer">
    <h1 className="goalsHeader">Goals</h1>
    <br></br>
    <input className="goalsInput"/>
    <button className="goalsSubmitbtn">Submit</button>
    <br></br>
    <input className="sdinput"/><button className="startDatebtn">Start Date</button>
    <input className="edinput"/><button className="endDatebtn">End Date</button>


    </div>)
}


}

export default Goals