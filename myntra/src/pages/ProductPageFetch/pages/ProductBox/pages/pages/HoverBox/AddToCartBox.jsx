import React, { useEffect, useState } from 'react'
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Text, Button, Grid} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let arr = []


export const AddToCartBox = ({data}) => {

  const [UserData, setUserData] = useState({})
  const {id, isAuth} = UserData
  let navigate = useNavigate()
  const toast = useToast()

  const GetUserData = async () => {
    try{
     let res = await axios.get('https://mock-server-trz7.onrender.com/User')
     return await res.data
    }catch(err){
     return err
    }
   }
   



  useEffect(() => {
    GetUserData()
    .then(res => setUserData(res))
    .catch(err => console.log(err))
  }, [])


  const postUserCartData = async (data) => {
    try {
      const res = await axios.patch(`https://mock-server-trz7.onrender.com/User-Data/${id}`, data)
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




  const HandelAddToCart = (data) => {
    data.id = Date.now()
    data.isAuth = true
    data.count = 1
    
    arr.push(data)

   if(isAuth== true){
    postUserCartData({CartPage2: arr})
    .then(res => {toast({
      title: 'Succesfull',
      description: 'Product Added Succesfull',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })})
    .catch(err => console.log(err))
   }else{
    navigate('/login')
   }


 
  }

  const HandelAddToWishList = () => {
    toast({
          title: 'Succesfull',
          description: 'Product Added In WishList',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
  }






    data.size.length = 5 
  return (
    <Grid gap="1" pt="5px">
              <Button
                mb="2"
                borderRadius={"0px"}
                w="100%"
                border={"1px solid black"}
                gap="3"
                onClick={()=>HandelAddToWishList(data)}
              >
                <Text textAlign={"start"}>
                  <BsHeart color="black" />
                </Text>{" "}
                <Text  color="black">WISHLIST</Text>
              </Button>
              <Button
                bg="#F167AE"
                _hover={"none"}
                borderRadius={"0px"}
                w="100%"
                border={"1px solid black"}
                gap="3"
                onClick={()=>HandelAddToCart(data)}
              >
                <Text textAlign={"start"}>
                  <BsCart color="black" />
                </Text>{" "}
                <Text color="black">ADD TO CART</Text>
              </Button>

              <Text color="black">size :- {data.size.join(" ")} </Text>
              <Text textAlign={"start"}>
                <Text as="b" color="black">
                  Rs.{data.strike_price}
                </Text>
              </Text>
            </Grid>
  )
}
