import { Box, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const SelectBtn = ({Sortfunction}) => {
  const [select, setSelect] = useState("")
  const data = [
    "Recommended",
    "What's New",
    "Popularity",
    "Better Discount",
    "Price High to Low",
    "Price Low to High",
    "Costomer Rating",
  ];

  const handelselect = (e) => {
     Sortfunction(e)
  }
  return (
    <Box p="5px">
      <Select
        outline={"1px solid"}
        borderRadius="0px"
        color="black"
        placeholder="Sort By Recommmended"
        onChange={(e)=>handelselect(e.target.value)} value={select}
      >
        {data.map((ele, i) => {
          return (
            <option key={i+Math.random()} color="black" value={ele}>
              {ele}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};
