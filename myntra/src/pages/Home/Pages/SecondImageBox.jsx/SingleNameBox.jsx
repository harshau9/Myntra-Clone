import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export const SingleNameBox = ({data}) => {
  return (
    <Box>
    <Image src={data} />
  </Box>
  )
}
