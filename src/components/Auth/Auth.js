
import React, {useState} from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import './Auth.css'
import {ChakraProvider, CSSReset, Button, Heading, Text, Flex, Spacer, Box, Container, useBreakpointValue, 
          DrawerBody,
          DrawerFooter,
          DrawerHeader,
          DrawerOverlay,
          DrawerContent,
          DrawerCloseButton,
          Drawer,
          useDisclosure,
          useStyles} from '@chakra-ui/react'
// import {IoIosArrowForward} from 'react-icons/io'

const Auth = (props) =>{

  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()
  // const styles = useStyles()



  const smVariant = useBreakpointValue({base: 'outline', md: 'solid'})


  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleRegister, setToggleRegister] = useState(false)
  const [toggleAbout, setToggleAbout] = useState(false)
  // const [toggleSidebar, setToggleSidebar] =useState(false)
  

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

  // const displaySidebar = ()=>{
  //   setToggleSidebar(true)

  // }

return (
    <>  

          <Flex 
          direction={['column', 'column', 'row', 'row']}
          >
            <Box p="4" margin='auto' alignItems='center' w={['100%', '100%']} >
              <Heading size='lg' color='teal'>Career Development</Heading>
                    
                    {/* <Button 
                    
                   

                    
                    ><IoIosArrowForward/>
                    
                    </Button> */}

                   

                <Flex direction={['column', 'column', 'column', 'column']} justify={['center']} centerContent>
                <Box alignItems='center' w={['100%', '50%']} h={['100%', '50%']} direction={['column', 'column']}>
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
              </Box>
              <Spacer/>
              </Flex>
                
                
         



            



              

    
              {/* <Text fontSize='sm' mb={4}>Track your progress througout your career and help prepare for promotion interviews</Text> */}






        <ChakraProvider>
        <CSSReset/>

        { toggleLogin ?  <LoginForm/>  : null }
        { toggleRegister ?  <RegisterForm/> : null }
        { toggleAbout ? 

                        <Flex 
                        
                        w={['90vw', '90vw', '70vw', '70vw']}
                   
                        
                        
                        >
                          <Container centerContent>
                          <Box padding={['10','10', '20', '20']}  bg='gray.100' h={['80vh']} centerContent w={['80vw']} >
                        
                              
                              <Text className='about-list' padding={['2', '5']} fontSize={['md', 'md', 'md', 'sm']}>
                                  Stay organized as your working towards those next steps in your career. Whether it's to help prepare your for job interviews.
                              </Text>
                            
                            
                              <Text className='about-list' fontSize={['md', 'md', 'md', 'sm']}>
                              Compare your skills and experience with the skills and experience of a job listing you're interested in.
                              </Text>
                              
                              <Text className='about-list' fontSize={['md', 'md', 'md', 'sm']}>
                              Keep track of your career Accomplishments
                              </Text>
                              
                              <Text className='about-list' fontSize={['md', 'md', 'md', 'sm']} >
                              Set and track goals
                              </Text>
                          
                            
                          
                          


                          </Box>
                        </Container>
                        </Flex>
                        
                      : null
      }
        
        </ChakraProvider>


     
    </>
 
)    

}

export default Auth


