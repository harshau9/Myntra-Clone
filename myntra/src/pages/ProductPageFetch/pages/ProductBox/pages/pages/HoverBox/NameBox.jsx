import React from 'react'
import { Flex, Text, Box, SimpleGrid, Grid } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs"
export const NameBox = ({data}) => {

  return (
    <Box pb="18px" mb="40px">
    <Grid gap="1" >
      <Text textAlign={"start"}>
        <Text as="b" color="black">
          {data.title}
        </Text>
      </Text>
      <Text color="black">{data.subtitle}</Text>
      <Text color="black"> <Flex gap="3">
        <Text>{data.rating}</Text>
        <Box w="25px" mt="3px"><BsStar /></Box>
        </Flex>
       </Text>
      
      <SimpleGrid columns={3} spacing={[0]}>
      <Text fontSize={["sm", "sm", "sm"]} textAlign={"start"}>
        <Text as="b" color="black">
          Rs.{data.discounted_price}
        </Text>
      </Text>
      <Text fontSize={["sm", "sm", "sm"]} color="black" as="del">Rs {data.strike_price}</Text>
      <Text fontSize={["sm", "sm", "sm"]} color="orange">{data.discount}</Text>
      </SimpleGrid>
    
    </Grid>
  </Box>
  )
}
