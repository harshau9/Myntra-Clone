import { Box, Select, Text } from '@chakra-ui/react'
import React from 'react'

export const SelectBtn = () => {
  return (
    <Box p="5px">
 <Select outline={"1px solid"} borderRadius="0px" color="black" placeholder='Select option'>
  <option color="black" value='option1'>Option 1</option>
  <option color="black" value='option2'>Option 2</option>
  <option color="black" value='option3'>Option 3</option>
</Select>
    </Box>
  )
}
