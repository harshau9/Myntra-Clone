import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const GenderBox = ({Mens}) => {
  const [value, setValue] = useState("Mens");

  useEffect(() => {
  Mens(value)
  }, [value])


  return (
    <Box border={"1px solid black"} borderBottom={"0px"} p="10px">
      <RadioGroup onChange={setValue} value={value} >
        <SimpleGrid columns={1}>
          <Box>
            <Radio color="green" colorScheme="red"  variant='outline' value="Mens">
             <Text color="black">Mens</Text>
            </Radio>
          </Box>

          <Box>
            <Radio colorScheme="red" value="Womens">
              <Text color="black">Womens</Text>
            </Radio>
          </Box>

          <Box>
            <Radio colorScheme="red" value="Child">
              <Text color="black">Child</Text>
            </Radio>
          </Box>

        </SimpleGrid>
      </RadioGroup>
    </Box>
  );
};

{
  /* <RadioGroup defaultValue='2' >
{Gender.map((gen, i)=>(
    <Box textAlign={"start"} >
        <Radio border="black" colorScheme='red'  >
           <Text color="black">{gen}</Text>
        </Radio>
    </Box>
))}
</RadioGroup> */
}

// <Box textAlign={"start"}>
//       <Radio colorScheme='red' value='1'>
//      <Text color="black">Mens</Text>
//     </Radio>
//    </Box>

//    <Box textAlign={"start"}>
//       <Radio colorScheme='red' value='1'>
//      <Text color="black">Women</Text>
//     </Radio>
//    </Box>
//    <Box textAlign={"start"}>
//       <Radio colorScheme='red' value='1'>
//      <Text color="black">Boys</Text>
//     </Radio>
//    </Box>

//    <Box textAlign={"start"}>
//       <Radio colorScheme='red' value='1'>
//      <Text color="black">Girls</Text>
//     </Radio>
//    </Box>
