import axios from 'axios'
import React, {useState, useEffect} from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import {ChakraProvider, CSSReset, Button, Heading, Text} from '@chakra-ui/react'


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
        <Heading mb={4} bg='gray.100'>Welcome to your Career Development Tracker</Heading>
        <Text fontSize='sm' mb={4}>Track your progress througout your career and help prepare for promotion interviews</Text>
        <Button colorScheme='teal' 
                size='md' 
                margin='auto'
                onClick={displayLoginForm}
                >Login
        </Button>

        <Button 
              colorScheme='teal' 
              size='md' 
              onClick={displayRegisterForm}
              >Register
        </Button>


        <ChakraProvider>
        <CSSReset/>

        { toggleLogin ?  <LoginForm/>  : null }
        { toggleRegister ?  <RegisterForm/> : null }
        
        </ChakraProvider>


     
    </>
 
)    

}

export default Auth


