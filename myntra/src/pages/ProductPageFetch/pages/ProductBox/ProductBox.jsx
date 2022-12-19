import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductSideFiter } from "../ProductSideFilter/ProductSideFiter";
import { SigleProductPage } from "./pages/SigleProductPage";

export const ProductBox = ({data}) => {

  data.length = 20
  return (
    <>
    <Box w="70%" m="auto" >
      <SimpleGrid columns={[1, 2, 2,4]} spacing={10}>
        {data.map((product, i) => {
          return <SigleProductPage i={i} product={product} key={i/Math.random()} />;
        })}
      </SimpleGrid>
    </Box>
    </>
  );
};
