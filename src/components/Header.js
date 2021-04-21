import {Button, Spacer, Flex, Box} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Header = (props)=>{

    const logout = ()=>{
        axios.post(`/logout`)
    }



return <Flex className="headerContainer">
            {/* <Box className="flexHeader">
                <Heading id="roleHeader" w='100%'>My Next Role </Heading> 
              
                <Box id='inputandsave'>
                <Input size='xs' className='my-next-role-input' value={props.myNextRole} onChange={(e)=>props.handleRoleChange(e)}/> 
               
                <Button className="myRoleButton" size='xs' onClick={()=>props.postMyRole(props.myNextRole)}>Save</Button>
                </Box>
                
                <h1 id="jobTitleDisplayed">{props.savedRole}</h1>
                </Box> */}
                <Spacer/>

                    <Box className='nav-btns'>

                    <Link to='/home'> <Button size="sm" ml='2'>
                            Home
                        </Button></Link>
                        
                       <Link to='/goals'> <Button size="sm" ml='2'>
                            Goals
                        </Button></Link>
                       
                        <Button size="sm"  ml='2'>
                            Profile
                        </Button>
                     
                       <Link to='/'><Button size="sm"  ml='2' onClick={logout}>
                            Logout
                        </Button></Link> 
                       
                     

                    </Box>
            <div>    
        </div>
    </Flex>

}

export default Header;