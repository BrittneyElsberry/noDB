import React, {Component} from 'react'
import {Button, Flex, Box} from '@chakra-ui/react'
import {MdDelete} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
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
    const {accomp, id, deleteSkills, editSkills} = this.props
    
return(

    <>
    {this.state.editing ? 
    
    (

        <li><input className="editInput" 
                    value={this.state.userInput}
                    type="text" 
                    onChange={(e)=>this.handleEditChange(e)}/>

                    <Button className="editSavebtn" 
                            size='xs'
                            variant='outline'
                            onClick={()=>{
                                            editSkills(id, this.state.userInput)
                                            this.setState({editing: false})
                                        }}>
                Save</Button>
        </li>

    ): 
    
    (
        <li className="accompListEditXbtns">
              {accomp}
            <Flex >
                 <Box alignItems='flex-end'>
    
                    <Button size="xs" variant='ghost' className="editbtn" onClick={(e)=>this.toggleEditMode(e)}><AiFillEdit/></Button>
                    <Button size="xs" variant="ghost" className="editXbtn" onClick={()=>deleteSkills(id)}><MdDelete/> </Button>
                 
                </Box>
             </Flex>
        </li>
    )}
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


