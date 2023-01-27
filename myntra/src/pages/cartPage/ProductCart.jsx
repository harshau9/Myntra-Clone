import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  useToast,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MainCartPage from "./MainCartPage";

const ProductCart = () => {
  const [cartData, setCartData] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [Total, setTotal] = useState(0);

  const { currentUserData } = useSelector((store) => store.dataReducer);
  const { id } = currentUserData;

  const postUserCartData = async (data) => {
    try {
      const res = await axios.patch(
        `https://mock-server-trz7.onrender.com/User-Data/${id}`,
        data
      );
      return await res.data;
    } catch (e) {
      toast({
        title: "Something went wrong",
        position: "top",
        description: `${e.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handelDelete = (id) => {
    const update = cartData.filter((ele) => ele.id !== id);
    setCartData(update);

    let total = 0;
    for (let ele of update) {
      total += Number(ele.discounted_price) * Number(ele.count);
    }
    setTotal(total);

    postUserCartData({ CartPageProduct: update })
      .then((res) => {
        toast({
          title: "Succesfull",
          position: "top",
          description: "Remove Succesfull",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  const getData = async () => {
    try {
      setLoading(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      let res = await axios.get(
        `https://mock-server-trz7.onrender.com/User-Data/${id}`
      );
      let update = await res.data["CartPageProduct"];
      let demo = [];
      let obj = {};

      for (let i = 0; i < update.length; i++) {
        if (obj[update[i].subtitle] === undefined) {
          demo.push(update[i]);

          obj[update[i].subtitle] = "present";
        }
      }

      setCartData(demo);
      let total = 0;
      for (let ele of update) {
        total += Number(ele.discounted_price) * Number(ele.count);
      }
      setTotal(total);

      localStorage.setItem("MyntShopCartTotal", JSON.stringify(total));
    } catch (e) {
      toast({
        position: "top",
        title: "Something went wrong",
        description: `Your Cart is Empty Please add Product  `,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
        <Box display={"flex"} justifyContent="space-around" mb={"1%"}>
          <Heading fontSize={"20px"} display={"flex"} gap="10px">
            Total Quantity:-{" "}
            <Text fontSize={"20px"} color={"pink.500"}>
              {cartData.length}
            </Text>
          </Heading>
          <Heading fontSize={"20px"} display={"flex"} gap="10px">
            Total Price:-{" "}
            <Text fontSize={"20px"} color={"pink.500"}>
              {Total}
            </Text>
          </Heading>
        </Box>
        <hr />
        {loading ? (
          <Center m="auto" mb="6rem" mt="6rem">
            {" "}
            <Spinner size={"xl"} color="red.500" />{" "}
          </Center>
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {cartData.map((ele, i) => (
              <MainCartPage
                ele={ele}
                key={i}
                cartData={cartData}
                setTotal={setTotal}
                handelDelete={handelDelete}
              />
            ))}
          </SimpleGrid>
        )}

        <hr />
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <Button
            variant="solid"
            colorScheme={"teal"}
            m={"1rem 0"}
            w="100px"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ProductCart;
