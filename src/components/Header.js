import {Button, ButtonGroup} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Header = (props)=>{

    const logout = ()=>{
        axios.post(`/logout`)
    }



return <div className="headerContainer">
            <div className="flexHeader">
                <h1 id="roleHeader">My Next Role </h1> 
                <br></br>
                
                <input id="jobTitleInput" value={props.myNextRole} onChange={(e)=>props.handleRoleChange(e)}/> 
                <br></br>
                <button className="myRoleButton" onClick={()=>props.postMyRole(props.myNextRole)}>Save</button>
                <br></br>
                <br></br>
                
                </div>
                <h1 id="jobTitleDisplayed">{props.savedRole}</h1>

                    <div className='nav-btns'>
                        <Button size="sm">
                            Goals
                        </Button>
                        <Button size="sm">
                            Profile
                        </Button>
                        
                       <Link to='/'><Button size="sm">
                            Logout
                        </Button></Link> 
                       
                     

                    </div>
            <div>    
        </div>
    </div>

}

export default Header;