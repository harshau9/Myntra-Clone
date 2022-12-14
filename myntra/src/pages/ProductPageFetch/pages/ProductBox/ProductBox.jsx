import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SigleProductPage } from "./pages/SigleProductPage";

export const ProductBox = () => {
  const ArrayOfProdct = new Array(25).fill(0);
  return (
    <Box w="70%" m="auto">
      <SimpleGrid columns={[2, 3, 3,4]} spacing={10}>
        {ArrayOfProdct.map((ele) => {
          return <SigleProductPage />;
        })}
      </SimpleGrid>
    </Box>
  );
};
