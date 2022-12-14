import { Box, Radio } from '@chakra-ui/react'
import React from 'react'

export const GenderBox = () => {

 const Gender = [
    "Men",
    "Women",
    "Boys",
    "Girls"
 ]



  return (
    <Box border={"1px solid"} borderBottom={"0px"} p="10px" >
        {Gender.map((gen)=>(
            <Box textAlign={"start"}>
                <Radio colorScheme='red' value='1'>
                {gen}
                </Radio>
            </Box>
        ))}
    </Box>
  )
}
