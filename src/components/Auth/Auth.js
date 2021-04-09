import axios from 'axios'
import React, {useState, useEffect} from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import {ChakraProvider, CSSReset, Button, Heading, Text, Flex, Spacer, Box} from '@chakra-ui/react'


const Auth = (props) =>{


  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleRegister, setToggleRegister] = useState(false)
  

  const displayLoginForm = ()=>{
    setToggleLogin(true)
    setToggleRegister(false)
  }

  const displayRegisterForm = ()=>{
    setToggleRegister(true)
    setToggleLogin(false)
  }

return (
    <>  

          <Flex>
            <Box p="2"  >
              <Heading size="md" color='teal'>Career Development Tracker</Heading>
              </Box>
              <Spacer/>
                <Box>
                  <Button colorScheme='teal' 
                          size='md' 
                          mr='4'
                         
                          onClick={displayLoginForm}
                          >Login
                  </Button>

                  <Button 
                        colorScheme='teal' 
                        size='md' 
                        onClick={displayRegisterForm}
                        >Register
                  </Button>
                  </Box>
          </Flex>
              <Text fontSize='sm' mb={4}>Track your progress througout your career and help prepare for promotion interviews</Text>






        <ChakraProvider>
        <CSSReset/>

        { toggleLogin ?  <LoginForm/>  : null }
        { toggleRegister ?  <RegisterForm/> : null }
        
        </ChakraProvider>


     
    </>
 
)    

}

export default Auth


