import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export const ImagesBox = ({ data = []}) => {
  return (
    <Box>
    {data.map((Src,i) => (
      <Image key={i} src={Src} />
    ))}
    </Box>
  )
}
