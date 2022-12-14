import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FilterBox } from './pages/FilterBox/FilterBox'
import { ProductBox } from './pages/ProductBox/ProductBox'

export const ProductPageApi = () => {
  return (
  <Box width={"95%"} gap="10px"  m={"auto"}> 
    <Box p="10px" textAlign={"start"}>
        <Text>Home/ Footware /Crocs</Text>
    </Box>
    <Box  p="10px" textAlign={"start"}>
        <Text as='b'>Crocs - 76 items</Text>
    </Box>

     {/* product box and filter box here  */}

<Flex>
    <FilterBox />
    <ProductBox />
</Flex>



  </Box>
  )
}
