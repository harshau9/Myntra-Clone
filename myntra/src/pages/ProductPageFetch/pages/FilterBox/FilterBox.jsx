import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { CategoriesBox } from './Pages/Categories'
import { ColorBox } from './Pages/ColorBox'
import { DiscountRange } from './Pages/DiscountRange'
import { GenderBox } from './Pages/GenderBox'
import { PriceBox } from './Pages/Price'

export const FilterBox = ({Mens}) => {
  return (
    <> 
    <Box w="25%" display={["none", "initial" ,"initial", "initial"]} border="1px solid red">


    {/* Gender Box here  */}

    <GenderBox Mens = {Mens} />

     {/* Category Box here  */}

    <CategoriesBox />

    {/* Price Box here  */}

    <PriceBox />

   {/* Color box filter here  */}

   <ColorBox />

   {/* disCount page here  */}

   <DiscountRange />


    </Box>

    </>
  )
}
