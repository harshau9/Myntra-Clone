import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Spinner, useToast, Heading, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import MainCartPage from './MainCartPage';

const ProductCart = () => {
    const [cartData, setCartData] = useState([]);
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [arr, setArr] = useState([]);

    const [Total, setTotal] = useState(0)


    useEffect(() => {
        getData();
    }, [])



    const postUserCartData = async (data) => {
        try {
          const res = await axios.patch(`https://mock-server-trz7.onrender.com/User-Data/1`, data)
          return await res.data;
        } catch (e) {
          toast({
            title: 'Something went wrong',
            description: `${e.message}`,
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        }
      };

      


    const handelDelete = (id) => {
     const update = cartData.filter(ele => ele.id !== id)
           setCartData(update)
    
        postUserCartData({CartPage2: update})
        .then(() => {toast({
          title: 'Succesfull',
          description: 'Remove Succesfull',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })})
        .catch(err => console.log(err))
       
    }


    

    const getData = async () => {
        try {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            let res = await axios.get(`https://mock-server-trz7.onrender.com/User-Data`);
            let update = await res.data[1]["CartPage2"]
            setCartData(update);
            let total = 0;

        for (let ele of update) {
            total += Number(ele.discounted_price) * Number(ele.count)
        };
        // setTotal(total)
            
        } catch (e) {
            toast({
                title: 'Something went wrong',
                description: `${e.message}`,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    };

    const handleCheckout = () => {
        navigate("/checkout");
    }


    return (
        <div>
            <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
                {loading && <Spinner ml={"40%"} size={"xl"} color="red.500" /> }
                <Box display={"flex"} justifyContent="space-around" mb={"1%"}>
                    <Heading fontSize={"20px"} display={"flex"} gap="10px">Total Quantity:- <Text fontSize={"20px"} color={"pink.500"} >{cartData.length}</Text></Heading>
                    <Heading fontSize={"20px"} display={"flex"} gap="10px">Total Price:- <Text fontSize={"20px"} color={"pink.500"} >{Total}</Text></Heading>
                </Box>
                <hr />
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
                  {cartData.map(ele =>  <MainCartPage  ele = {ele} cartData={cartData} setTotal={setTotal}  handelDelete={handelDelete}/>)}
                </SimpleGrid>

                <hr />
                <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Button variant="solid" colorScheme={"teal"} m={"1rem 0"} w="100px"  onClick={handleCheckout}>Checkout</Button>
                </Box>
            </Box>
        </div>
    );
}

export default ProductCart;