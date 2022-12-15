import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProductSideFiter } from "../ProductSideFilter/ProductSideFiter";
import { SigleProductPage } from "./pages/SigleProductPage";

export const ProductBox = ({data}) => {
  return (
    <>
    <Box w="70%" m="auto" border={"1px solid green"}>
      <SimpleGrid columns={[1, 2, 2,4]} spacing={10}>
        {data.map((product) => {
          return <SigleProductPage product={product} />;
        })}
      </SimpleGrid>
    </Box>
    </>
  );
};
