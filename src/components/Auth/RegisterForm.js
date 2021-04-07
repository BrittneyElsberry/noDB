import {useState} from 'react'
import {Stack, 
        Button, 
        ButtonGroup,
        FormControl, 
        FormLabel, 
        Input, 
        InputGroup, 
        InputRightElement,
        FormHelperText, 
        Container,
        Box,
        Heading} from '@chakra-ui/react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'


const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const isInvalid = password === '' || email === ''
    const {push} = useHistory()



    const handleSignIn = (formSubmit)=>{
        formSubmit.preventDefault()
        console.log(email, password, firstName, lastName)
        axios.post(`/register`, {email, password, firstName, lastName})
        .then(res => {
            console.log(res.data)
            push('/home')
        
        })
        .catch(err=> {
            console.log(err)})

    }


    return ( <div>
   
                <Container maxW='sm' centerContent>
                    <Box padding='10' bg='gray.100'>
                <form onSubmit={handleSignIn}>
                    <Stack maxWidth={600} margin='auto' spacing={5} marginTop={5}/>
                        <FormControl>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input  isRequired
                                    type='email'
                                    id='email'
                                    aria-describedby='email-helper-text' 
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}/>
                            <FormHelperText id='email-helper-text' >We'll never share your email</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <Input  isRequired
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    aria-describedby='password-helper-text' 
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}/>
                                  <FormHelperText id='password-helper-text' >The password you used to sign up with</FormHelperText>
                        </FormControl>
                        <FormControl>
                        <FormLabel htmlFor='First Name'>First Name</FormLabel>
                        <Input  isRequired
                                type={firstName}
                                id='firstName'
                                value={firstName}
                                onChange={(e)=> setFirstName(e.target.value)}/>
                           
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='Last Name'>Last Name</FormLabel>
                        <Input  isRequired
                                type={lastName}
                                id='lastName'
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}/>
                           
                    </FormControl>
                    <FormControl>
                    <Button colorScheme='teal' type='submit' disabled={isInvalid} variant='outline' >Register</Button>
                    </FormControl>

                </form>  
                </Box>
                </Container>       
            </div>
            
            
                )


}

export default RegisterForm