import React, { useState,useEffect } from 'react'
import { Box, Checkbox, CheckboxGroup, Text } from "@chakra-ui/react";


export const FilterSinglePage = ({Textdata, data , cheakBox}) => {

  const [value, setValue] = useState(" ");


  useEffect(() => {
   if(cheakBox){
    cheakBox(value)
   }
  }, [value])


  return (
    <Box border={"1px solid black"} borderBottom={"0px"} p="10px">
    <Text color={"black"} textAlign={"start"} mt="5px" mb="10px">
      <Text  as="b">{Textdata}</Text>
    </Text>

    <CheckboxGroup onChange={setValue} value={value}>
    {data.map((Cat, i) => (
      <Box textAlign={"start"} key={i/Date.now()}>
        <Checkbox defaultChecked={false} colorScheme="red" value={Cat.value ? Cat.value : Cat}>
          <Text color="black">{Cat.name ? Cat.name : Cat}</Text>
        </Checkbox>
      </Box>
    ))}
    </CheckboxGroup>
  </Box>
  )
}
