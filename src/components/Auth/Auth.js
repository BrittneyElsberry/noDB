import axios from 'axios'
import React, {useState, useEffect} from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import './Auth.css'
import {ChakraProvider, CSSReset, Button, Heading, Text, Flex, Spacer, Box, Container} from '@chakra-ui/react'


const Auth = (props) =>{


  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleRegister, setToggleRegister] = useState(false)
  const [toggleAbout, setToggleAbout] = useState(false)
  

  const displayLoginForm = ()=>{
    setToggleLogin(true)
    setToggleRegister(false)
    setToggleAbout(false)
  }

  const displayRegisterForm = ()=>{
    setToggleRegister(true)
    setToggleLogin(false)
    setToggleAbout(false)
  }

  const displayAbout = ()=>{
    setToggleAbout(true)
    setToggleRegister(false)
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

                <Button 
                        colorScheme='teal' 
                        size='md' 
                        mt='2'
                        mr='4'
                        onClick={displayAbout}
                        >About
                  </Button>


                  <Button colorScheme='teal' 
                          size='md' 
                          mr='4'
                          mt='2'
                         
                          onClick={displayLoginForm}
                          >Login
                  </Button>

                  <Button 
                        colorScheme='teal' 
                        size='md' 
                        mt='2'
                        mr='4'
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
        { toggleAbout ? 

                        <Container maxW='md' centerContent>
                          <Box padding='10' bg='gray.100' >
                          <Text>
                            <p className='about-list'>

                            Stay organized as your working towards those next steps in your career. Whether it's to help prepare your for job interviews.

                            </p>
                          
                            <ul>
                            <li className='about-list'>
                            Compare your skills and experience with the skills and experience of a job listing you're interested in.
                            </li>
                            <li className='about-list'>
                            Keep track of your career Accomplishments
                            </li>
                            <li className='about-list'>
                            Set and track goals
                            </li>
                            </ul>
                            
                          
                          </Text>


                          </Box>
                        </Container>
                        
                      : null
      }
        
        </ChakraProvider>


     
    </>
 
)    

}

export default Auth


