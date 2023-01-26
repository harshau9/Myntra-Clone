import { Box, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const SelectBtn = ({Sortfunction}) => {
  const [select, setSelect] = useState("")
  const data = [
    "Better Discount",
    "Price High to Low",
    "Price Low to High",
    "Customer Rating",
  ];

  const handelselect = (e) => {
     Sortfunction(e)
  }
  return (
    <Box p="5px">
      <select
        outline = {"2px solid"}
        borderRadius = "0px"
        color = "black"
        p="px"
        onChange={(e)=>handelselect(e.target.value)} value={select}
      >
        {data.map((ele, i) => {
          return (
            <option key={i+Math.random()} color="black" value={ele}>
              {ele}
            </option>
          );
        })}
      </select>
    </Box>
  );
};
