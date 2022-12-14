import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { CategoriesBox } from './Pages/Categories'
import { ColorBox } from './Pages/ColorBox'
import { DiscountRange } from './Pages/DiscountRange'
import { GenderBox } from './Pages/GenderBox'
import { PriceBox } from './Pages/Price'

export const FilterBox = () => {
  return (
    <Box w="25%" >
      <Flex p="10px">
        <Text as='b'>
          FILTER
        </Text>
          <Spacer />
        <Text color="red">
          CLEAR ALL
        </Text>
      </Flex>

    {/* Gender Box here  */}

    <GenderBox />

     {/* Category Box here  */}

    <CategoriesBox />

    {/* Price Box here  */}

    <PriceBox />

   {/* Color box filter here  */}

   <ColorBox />

   {/* disCount page here  */}

   <DiscountRange />


    </Box>
  )
}
