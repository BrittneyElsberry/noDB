import {useState} from 'react'
import {Stack, 
        Button, 
        FormControl, 
        FormLabel, 
        Input, 
        FormHelperText, 
        Container,
        Box} from '@chakra-ui/react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


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
                    <Stack maxWidth={600}  spacing={5} marginTop={5}/>
                        <FormControl isRequired>
                            <FormLabel className='form-labels' htmlFor='email'>Email</FormLabel>
                            <Input  isRequired
                                    size='xs'
                                    type='email'
                                    id='email'
                                    aria-describedby='email-helper-text' 
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}/>
                            <FormHelperText id='email-helper-text' >We'll never share your email</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel htmlFor='password' className='form-labels' >Password</FormLabel>
                            <Input  size='xs'
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    aria-describedby='password-helper-text' 
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}/>
                                  <FormHelperText id='password-helper-text' >The password you used to sign up with</FormHelperText>
                        </FormControl>
                        <FormControl isRequired>
                        <FormLabel htmlFor='First Name' className='form-labels' >First Name</FormLabel>
                        <Input  isRequired
                                 size='xs'
                                type={firstName}
                                id='firstName'
                                value={firstName}
                                onChange={(e)=> setFirstName(e.target.value)}/>
                           
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor='Last Name' className='form-labels' mt='2' >Last Name</FormLabel>
                        <Input  isRequired
                                 size='xs'
                                type={lastName}
                                id='lastName'
                                value={lastName}
                                onChange={(e)=> setLastName(e.target.value)}/>
                           
                    </FormControl>
                    <FormControl>
                    <Button colorScheme='teal' type='submit' disabled={isInvalid} variant='outline' mt='2' size='sm' >Register</Button>
                    </FormControl>

                </form>  
                </Box>
                </Container>       
            </div>
            
            
                )


}

export default RegisterForm