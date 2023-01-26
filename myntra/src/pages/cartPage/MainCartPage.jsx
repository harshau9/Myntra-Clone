import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MyCartLength from "./MyCartLength";
import CartItem from "./CartItem";
import CheckoutBox from "./CheckoutBox";

const MainCartPage = ({ ele, handelDelete, cartData, setTotal }) => {
  return (
    <Box>
      <CartItem
        ele={ele}
        setTotal={setTotal}
        handelDelete={handelDelete}
        cartData={cartData}
      />
    </Box>
  );
};

export default MainCartPage;
