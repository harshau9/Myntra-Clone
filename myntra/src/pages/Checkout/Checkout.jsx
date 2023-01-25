import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Img } from '@chakra-ui/image';
import CheckoutAlert from './CheckoutAlert';

const Checkout = () => {
    const nevigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(false);

    const handleCheckout = () => {
        setImageSrc(true);
        setTimeout(() => {
            nevigate("/")
        }, 4000);
    }
    console.log(imageSrc);
    return (
        <Box>
        

            <Box mt={"5%"}>
                {imageSrc === true ? <CheckoutAlert /> :
                    <Box id="master">
                        <Box id="main">
                            <Box id="b1">
                                <Img src={imageSrc} alt="" />
                                <Heading>Congratulations!</Heading>
                                <Heading>You are now a Premium Member</Heading>
                            </Box>
                            <Box id="b2" padding={"5%"}>
                                <Box padding={"5%"}>
                                    <Heading>Amount to be paid: ₹678</Heading>
                                    <Box action="" id="payment" mt={"1%"} display="flex" flexDirection={"column"}
                                        justifyContent={"space-between"}
                                        gap="5%" p={"5%"}>
                                        <Input mt="2%" id="card_number" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="16" placeholder="xxxx xxxx xxxx xxxx" />
                                        <Input mt="2%" type="date" id="expiry" placeholder="Expiry" />
                                        <Input mt="2%" type="text" id="holder" placeholder="Card Holder Name" />
                                        <Input mt="2%"
                                            type="password"
                                            maxLength="3"
                                            minLength="3"
                                            placeholder="CVV"
                                        />
                                        <Button
                                            fontSize={"20px"}
                                            padding={"25px"} bg="pink.300" variant={"outline"} textAlign={"center"} m="auto" mt="2%" w={"100px"} type="submit" id="checkout" onClick={handleCheckout}>Checkout</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>}
            </Box>
         
        </Box>
    );
}

export default Checkout;