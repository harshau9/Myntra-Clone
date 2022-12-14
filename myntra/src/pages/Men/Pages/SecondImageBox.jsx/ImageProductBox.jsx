import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const ImageProductBox = ({data}) => {
  return (
    <Flex>
    {data.map((Src)=><Box><Image src={Src} /></Box>)}
    </Flex>
  )
}
