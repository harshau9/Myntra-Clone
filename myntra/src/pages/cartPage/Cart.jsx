import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  useToast,
  Image,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      let res = await axios.get(
        `https://mock-server-trz7.onrender.com/User-Data`
      );
      setCartData(await res.data[0]["CartPage"]);
      setCartData(JSON.parse(localStorage.getItem("cart")));
      let Total = 0;
      for (let ele of cartData) {
        total += ele.cost;
      }
      setTotal(Total)
      localStorage.setItem("MyntShopHotelTotal", JSON.stringify(total))
    
    } catch (e) {
      toast({
        title: "Something went wrong",
        description: `${e.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

 
  const handleRemove = (index) => {
    cartData.splice(index, 1);
    setArr(cartData);
  };

  return (
    <div>
     
      <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
        {loading && <Spinner ml={"40%"} size={"xl"} color="red.500" />}
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
              {total}
            </Text>
          </Heading>
        </Box>
        <hr />
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(3,1fr)",
            sm: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(3,1fr)",
          }}
          textAlign="center"
        >
          {cartData &&
            cartData.map((el, index) => (
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                m={"1rem"}
                key={el.id}
              >
                <Image
                  src={el.image_url}
                  alt="room"
                  w={"100%"}
                  h={"300px"}
                ></Image>
                <Box>
                  <Heading m={"1rem 0"} size={"md"}>
                    {el.category.toUpperCase()} ROOM
                  </Heading>
                  <p>Type of Room : {el.type_of_room}</p>
                  <p>Bed : {el.bed_type}</p>
                  <p>No. of Adults : {el.no_of_persons || 4}</p>
                  <p>Capacity : {el.capacity}</p>
                  <p style={{ color: "green" }}>Cost : ₹{el.cost}</p>
                  <Button
                    variant="solid"
                    colorScheme={"teal"}
                    m={"1rem 0"}
                    w="100px"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}
        </Box>

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

export default Cart;
