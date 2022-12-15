import React from 'react'
import { Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import { BsStar } from "react-icons/bs"
export const NameBox = ({data}) => {
  return (
    <Box pb="18px" mb="40px">
    <Box>
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
      <Text color="black">{data.discount}</Text>
      <Text textAlign={"start"}>
        <Text as="b" color="black">
          Rs.{data.strike_price}
        </Text>
      </Text>
    </Box>
  </Box>
  )
}
