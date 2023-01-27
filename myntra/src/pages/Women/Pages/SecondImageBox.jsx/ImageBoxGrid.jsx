import { Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

export const ImageBoxGrid = ({data}) => {
  return (
    <SimpleGrid columns={6} >
    {data.map((Src,i)=><Box key={i}><Image src={Src} /></Box>)}
    </SimpleGrid>
  )
}
