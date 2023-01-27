import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/alert'
import React from 'react'

const CheckoutAlert = () => {
    return (
        <div>
            <Alert
                status='success'
                variant={''}
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                bg={"pink"}
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                Congratulations! Payment Successfully
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks now You are a Premium Member
                </AlertDescription>
            </Alert>
        </div>
    );
}

export default CheckoutAlert