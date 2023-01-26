import React, { useState } from "react";
import { Flex, Box, Image, Button, Heading } from "@chakra-ui/react";


const CartItem = ({ ele, handelDelete, cartData, setTotal }) => {
  const [count, setquantity] = useState(1);

  const decqun = () => {
    setquantity(count - 1);
  };

  const addqun = () => {
    setquantity(count + 1);
  };

  return (
    <Flex
      border={"1px solid rgb(224, 224, 225)"}
      flexDirection="column"
      width={"90%"}
      boxShadow={"rgb(0 0 0 / 6%) 0px 2px 2px"}
      borderRadius="4px"
    >
      <Box p={"16px"} gap={{ sm: "8px", base: "7px" }}>
        {/* //part1-17to 44line */}
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems={"center"}
          gap="2"
        >
          <Box>
            <Image src={ele.images[0]} alt="Image" width="200px" />
          </Box>
          <Box display={"flex"} gap="2">
            <Button
              onClick={() => {
                decqun();
                ele.count = count - 1;
                let total = 0;

                for (let elee of cartData) {
                  total += Number(elee.discounted_price) * Number(elee.count);
                }
                setTotal(total);
              }}
              disabled={count === 1}
            >
              -
            </Button>
            <Button
              backgroundColor={"white"}
              disabled="true"
              fontWeight={"bold"}
            >
              {count}
            </Button>
            <Button
              disabled={count === 8}
              onClick={() => {
                addqun();
                ele.count = count + 1;
                let total = 0;

                for (let eele of cartData) {
                  total += Number(eele.discounted_price) * Number(eele.count);
                }
                setTotal(total);
              }}
            >
              +
            </Button>
          </Box>
        </Flex>
        {/* //part2-line 46 to 71 */}
        <Flex flexDirection={"column"} border={"0px solid green"}>
          <Flex gap={1}></Flex>
        </Flex>
        {/* //part3- line 71 to 99*/}
        <Flex
          flexDirection={"column"}
          alignItems="center"
          gap={1}
          fontWeight="500"
        >
          <Heading fontSize="18px" color={"rgb(0, 0, 0)"}>
            Rs:-  {ele.discounted_price}
          </Heading>
          <Heading
            fontSize="14px"
            color={"rgb(21, 150, 124)"}
            lineHeight={"1.5"}
          >
            {" "}
            Free Shipping
          </Heading>
          <Flex gap={1} justifyContent="flex-end"></Flex>
        </Flex>
      </Box>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        borderTop={"1px solid rgb(224, 224, 225)"}
        fontSize="13px"
        fontWeight={"500"}
        background="transparent"
      >
        <Box
          width={"49%"}
          borderRight="1px solid rgb(224, 224, 225)"
          textAlign={"center"}
        >
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
            onClick={() => handelDelete(ele.id)}
          >
            Remove
          </Button>
        </Box>
        <Box width={"49%"} textAlign={"center"}>
          <Button
            backgroundColor={"white"}
            color=" rgb(23, 116, 239)"
            _hover={"backgroundColor:white"}
          >
            Move to Wishlist
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
