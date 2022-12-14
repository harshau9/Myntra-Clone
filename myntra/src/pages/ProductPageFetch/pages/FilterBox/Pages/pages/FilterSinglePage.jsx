import React from 'react'
import { Box, Checkbox, Text } from "@chakra-ui/react";

export const FilterSinglePage = ({Textdata, data, }) => {
  return (
    <Box border={"1px solid"} borderBottom={"0px"} p="10px">
    <Text textAlign={"start"} mt="5px" mb="10px">
      <Text as="b">{Textdata}</Text>
    </Text>

    {data.map((Cat) => (
      <Box textAlign={"start"}>
        <Checkbox colorScheme="red" defaultChecked>
          {Cat}
        </Checkbox>
      </Box>
    ))}
  </Box>
  )
}
