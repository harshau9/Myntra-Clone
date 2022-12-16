import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SelectBtn } from "./pages/SelectBtn";

import { AiOutlineDown } from "react-icons/ai"
import { ChevronDownIcon } from "@chakra-ui/icons";

export const ProductSideFiter = ({Sortfunction}) => {
  
  const ListFilter = [
    { name: "Age", data: ["0M-3M", "3M-6M", "6m-9M", "9M-12M", "12M-18M", "2Y-4Y", "4Y-6Y", "6Y-9Y", "9Y-12Y", "12Y-18Y", "18Y-24Y", "Newborn"] },
    { name: "Bundles", data: ["Bundels", "Single Styles"] },
    { name: "Countory Of Origin", data: ["All Countries", "India", "USA", "New York"] },
    { name: "Size", data: ["XL", "S", "M", "L", "XL", "XXL", "3XL", "4XL"] }];
  return (
    <Box w="70%"
      m="auto">
      <Flex gap="25px" display={["none", "flex", "flex", "flex"]}>
        {ListFilter.map((ele, i) => {
          return (
            <Menu key={i+Date.now()}>
              <MenuButton rightIcon={<ChevronDownIcon />}>
                <Flex>
                  <Box><Text color="black">{ele.name}</Text></Box>
                  <Box pl="3px" mt="6px">
                    <AiOutlineDown />
                  </Box>
                </Flex>
              </MenuButton>
              <MenuList opacity={"none"} p="15px">
                <CheckboxGroup>
                  <SimpleGrid columns={3} spacing={5}>
                    {ele.data.map((ele, i) => {
                      return (
                        <Box key={i+Date.now()}>
                          <Checkbox colorScheme='red' defaultChecked={false}>
                            {ele}
                          </Checkbox>
                        </Box>
                      )
                    })}
                  </SimpleGrid>
                </CheckboxGroup>
              </MenuList>
            </Menu>
          );
        })}
        <Spacer  display={["none", "flex", "flex", "flex"]} />

        <SelectBtn Sortfunction={Sortfunction} />
      </Flex>
    </Box>
  );
};
