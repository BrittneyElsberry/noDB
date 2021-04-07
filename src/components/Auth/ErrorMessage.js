import {Box, Alert, AlertIcon, AlertDescription} from '@chakra-ui/react'
import RegisterForm from './RegisterForm'

const ErrorMessage = ({message}) =>{

    return (

        <Box my={4}>
            <Alert status='error' borderRadius={4}>
                <AlertIcon/>
            <AlertDescription>{message}</AlertDescription>
            </Alert>

        </Box>
    )

}

export default ErrorMessage