import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SelectBtn } from "./pages/SelectBtn";

import { ChevronDownIcon } from "@chakra-ui/icons";

export const ProductSideFiter = () => {
  const ListFilter = ["Age", "Bundles", "Countory Of Origin", "Size"];
  return (
    <Box w="70%" border={"1px solid red"} m="auto">
      <Flex gap="25px">
        {ListFilter.map((ele) => {
          return (
            <Menu>
              <MenuButton rightIcon={<ChevronDownIcon />}>
                <Text color="black">{ele}</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          );
        })}
        <Spacer />

        <SelectBtn />
      </Flex>
    </Box>
  );
};
