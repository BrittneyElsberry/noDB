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
    import ErrorMessage from './ErrorMessage'
    import axios from 'axios'
    import {useHistory, Link} from 'react-router-dom'

export default function LoginForm (){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const [error, setError] = useState('')
    const isInvalid = password === '' || email === ''
    const {push} = useHistory()
 

    const handleSignIn = (event)=>{
        event.preventDefault()
        console.log(email, password)
        axios.post(`/login`, {email, password})
        .then(res => {
            console.log(res.data)
            push('/home')
        
        })
        .catch(err=> {
            setError(err)
            console.log(err)})

    }

    return (
        <div>
   
        <Container maxW='sm' centerContent>
            <Box padding='10' bg='gray.100'>
        <form method="POST" onSubmit={handleSignIn}>
        {error && <ErrorMessage message={error}/>}
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
            <Button colorScheme='teal' type='submit' disabled={isInvalid} variant='outline' >Login</Button>
            </FormControl>

        </form>  
        </Box>
        </Container>       
    </div>
    
    )


}

