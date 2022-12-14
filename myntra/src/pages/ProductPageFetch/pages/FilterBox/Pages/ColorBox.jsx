import React from 'react'
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";

export const ColorBox = () => {

const Color = [
   {color: "Off White",bg:"white"},
   {color:"Black", bg:"black"},
   {color:"Red", bg:"red"},
   {color:"Navy Blue", bg:"blue.500"},
   {color: "Maroon", bg:"maroon"}
]

  return (
    // <FilterSinglePage data={Color} Textdata={"COLOR"} />
    <Box border={"1px solid"} borderBottom={"0px"} p="10px">
    <Text textAlign={"start"} mt="5px" mb="10px">
     COLOR </Text>

    <Box gap="5px">
    {Color.map(({color, bg}) => (
      <Box textAlign={"start"} mb="5px">
       <Flex m="auto" gap="8px"> 
       <Box><Checkbox height={"100%"} m="auto"  colorScheme="red" defaultChecked>
        </Checkbox></Box>
        <Box border={"0.2px solid"} bg={bg} borderRadius="100%" w="1.5rem"></Box> 
        <Box>{color}</Box></Flex>
      </Box>
    ))}
    </Box>
  </Box>

  )
}
