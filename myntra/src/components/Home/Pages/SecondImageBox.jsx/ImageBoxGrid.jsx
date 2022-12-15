import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const ImageBoxGrid = ({data}) => {
  return (
    <SimpleGrid columns={6} >
    {data.map((Src)=><Box><Image src={Src} /></Box>)}
    </SimpleGrid>
  )
}
