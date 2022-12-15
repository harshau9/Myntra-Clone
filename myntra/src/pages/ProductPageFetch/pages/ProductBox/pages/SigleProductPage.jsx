import {
    Flex,
    Text,
    Box,
    Image,
  } from '@chakra-ui/react';
import React from 'react'

export const SigleProductPage = () => {


    const data = {
        isNew: true,
        imageURL:
          'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
      };

  return (
    <Flex w="full" border={"1px solid red"} alignItems="center" justifyContent="center">
        <Box  bg='white'> 
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
          />
          <Box border={"1px solid red"}>
            <Text textAlign={"start"} color="black">{data.name}</Text>
            <Text color="black">Women Puff Sleevs  mini Dress</Text>
            <Text textAlign={"start"} color="black">Rs.{data.price}</Text>
          </Box>
        </Box>
      </Flex>
  )
}
