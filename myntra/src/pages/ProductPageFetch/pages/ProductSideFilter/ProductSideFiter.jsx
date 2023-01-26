import {
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { SelectBtn } from "./pages/SelectBtn";



export const ProductSideFiter = ({Sortfunction}) => {
  

  return (
    <Box w="70%"
     mt="6rem" m="auto"p="3">
      <Flex gap="25px" >
        <Spacer  />
        <SelectBtn Sortfunction={Sortfunction} />
      </Flex>
    </Box>
  );
};
