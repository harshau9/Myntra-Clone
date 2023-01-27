import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const ImageProductBox = ({data}) => {
  return (
    <Flex>
    {data.map((Src,i)=><Box key={i}><Image src={Src} /></Box>)}
    </Flex>
  )
}
