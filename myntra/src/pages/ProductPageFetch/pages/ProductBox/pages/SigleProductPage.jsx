import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { AddToCartBox } from "./pages/HoverBox/AddToCartBox";
import { NameBox } from "./pages/HoverBox/NameBox";
import { CrousalBox } from "./pages/SliderBox/CrousalBox";


export const SigleProductPage = ({product, i}) => {
  const [Hover, setHover] = useState(false);
  const [CrouselBox, setCrouselBox] = useState(false)

  return (
    <Box key={i/Date.now()} boxShadow='lg'  rounded='md' bg='white'>
      <Box bg="white" h={["26rem", "26rem", "26rem"]} >
        <Box onMouseEnter={() => setCrouselBox(true)}
          onMouseLeave={() => setCrouselBox(false)} h="13.5rem"
          overflow="hidden"
          >
        <CrousalBox data={product} CrouselBox={CrouselBox}/>
        </Box>
        <Box
          p='15px'
          pt={["34px", "20px", "20px"]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {!Hover ? (
            <NameBox data={product}/>
          ) : (
            <AddToCartBox data={product} />
          )}
        </Box>
      </Box>
    </Box>
  );
};
