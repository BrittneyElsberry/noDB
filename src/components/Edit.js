import React, {Component} from 'react'
// import Accomplishments from './Accomplishments'
// import axios from 'axios'


class Edit extends Component {
constructor(){
super()
this.state = {
    editing: false,
    userInput: ''
   
}
}

toggleEditMode=()=>{
    this.setState({editing: true})
}

handleEditChange=(e)=>{
    this.setState({userInput: e.target.value})
}

render(){
    const {accomp, deleteSkills, updateSkills, skills} = this.props
    
return(

    <>
    {this.state.editing ? (

        <li><input className="editInput" 
                    value={this.state.userInput}
                    type="text" 
                    onChange={(e)=>this.handleEditChange(e)}/>

       <button className="editSavebtn" onClick={()=> 
       {
           updateSkills(accomp.id, this.state.userInput)
           this.setState({editing: false})
        }}>Save</button></li>
    ): (
        <li className="accompListEditXbtns">
              {accomp.skills}
             
             <button className="editXbtn" onClick={()=>deleteSkills(accomp.id)}>X</button>
             <button className="editbtn" onClick={(e)=>this.toggleEditMode(e)}>Edit</button>
        </li>
    ) }
    </>
            )


}

    // return(
    
    // <div> 


    //           {this.state.accomplishments.map(accomp => {
    //          return {this.state.editing 
    //          ? 
    //             <input key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleSave(e)}>Save</button> <input/>
    //         : 
    //           <ul key={accomp.id}>{accomp.skills}<button onClick={()=>this.deleteSkills(this.state.accomplishments.id)}>X</button><button onClick={(e)=>this.handleSave(e)}>Save</button></ul>        

      // onChange={(e)=>handleSave(e.target.value)
      //  value={this.state.userInput}
          

    //      )}    
   
    //  )}  )  </div> )
}
export default Edit


