import React from "react";
import { Box } from "@chakra-ui/react";
import CartItem from "./CartItem";

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
