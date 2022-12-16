import { Box, Radio } from '@chakra-ui/react'
import React from 'react'

export const DiscountRange = () => {

    const Discount = [
        "20% and above",
        "30% and above",
        "40% and above"
    ]
  return (
    <Box border={"1px solid"} borderBottom={"0px"} p="10px" >
        {Discount.map((gen, i)=>(
            <Box textAlign={"start"} key={i/Date.now()}>
                <Radio colorScheme='red' value='1'>
                {gen}
                </Radio>
            </Box>
        ))}
    </Box>
  )
}
