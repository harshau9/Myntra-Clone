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
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Grid } from "react-loader-spinner";
import { BsStar } from "react-icons/bs";

const Cart = () => {
  const [cartData, setCartData] = useState("");
  const [hotelFlag, setHotelFlag] = useState(false);
  // const [productData, setProductData] = useState("");
  // const [productFlag, setProductFlag] = useState(false);
  const [kidsData, setKidsData] = useState([]);
  const [kidsFlag, setKidsFlag] = useState(false);
  const [beautyData, setbeautyData] = useState([]);
  const [beautyFlag, setbeautyFlag] = useState(false);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUserData } = useSelector((store) => store.dataReducer);
  const { id } = currentUserData;

  useEffect(() => {
    getData();
    // getProductData();
    setHotelFlag(localStorage.getItem("hotelFlag"));
    // setProductFlag(localStorage.getItem("productFlag"));
    setKidsData(JSON.parse(localStorage.getItem("kidscart")) || []);
    setKidsFlag(localStorage.getItem("kidFlag"));
    setbeautyData(JSON.parse(localStorage.getItem("beautycart")) || []);
    setbeautyFlag(localStorage.getItem("beautyFlag"));
  }, []);


  const getData = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      let res = await axios.get(
        `https://mock-server-trz7.onrender.com/User-Data/${id}`
      );
      setCartData(res.data.CartPageRoom);
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

  // const getProductData = async () => {
  //   try {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //     let res = await axios.get(
  //       `https://mock-server-trz7.onrender.com/User-Data/${id}`
  //     );
  //     setProductData(res.data.CartPageProduct);
  //   } catch (e) {
  //     toast({
  //       title: "Something went wrong",
  //       description: `${e.message}`,
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };



  // console.log(productData);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  let total1 = 0;
  for (let ele of cartData) {
    total1 += Number(ele.cost);
  }
  let total2 = 0;
  for (let ele of beautyData) {
    total2 += Number(ele.discountedPrice);
  }
  let total3 = 0;
  for (let ele of kidsData) {
    total3 += Number(ele.strike_price);
  }
  localStorage.setItem("cartTotal", total1 + total2 + total3);

  const handleRemove = (index) => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);
    cartData.splice(index, 1);
    if (cartData.length === 0) {
      localStorage.setItem('hotelFlag', false);
    }
  };

  // const handleRemoveProduct = (index) => {
  //   setLoading(true);
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1000);
  //   productData.splice(index, 1);
  //   if (productData.length === 0) {
  //     localStorage.setItem("productFlag", false);
  //   }
  // };

  const handleRemoveKids = (index) => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);
    kidsData.splice(index, 1);
    setKidsData(kidsData);
    localStorage.setItem("kidscart", JSON.stringify(kidsData));
    if (kidsData.length === 0) {
      localStorage.setItem("kidFlag", false);
      localStorage.removeItem("kidscart");
    }
  };

  const handleRemoveBeauty = (index) => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);
    beautyData.splice(index, 1);
    setbeautyData(beautyData);
    localStorage.setItem("beautycart", JSON.stringify(beautyData));
    if (beautyData.length === 0) {
      localStorage.setItem("beautyFlag", false);
      localStorage.removeItem("beautycart");
    }
  };



  return (
    <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
      {loading && <Spinner ml={"40%"} size={"xl"} color="red.500" />}
      <Box display={"flex"} justifyContent="space-around" mb={"1%"}>
        <Heading fontSize={"20px"} display={"flex"} gap="10px">
          Total Quantity:-{" "}
          <Text fontSize={"20px"} color={"pink.500"}>
            {cartData.length + beautyData.length + kidsData.length}
          </Text>
        </Heading>
        <Heading fontSize={"20px"} display={"flex"} gap="10px">
          Total Price:-{" "}
          <Text fontSize={"20px"} color={"pink.500"}>
            {total1 + total2 + total3}
          </Text>
        </Heading>
      </Box>


      <hr />
      {(hotelFlag && cartData.length !== 0) ?
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
                w="70%"
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
        </Box> : <Heading>No Hotel Data</Heading>
      }


      {/* {(productFlag && productData.length !== 0) ?
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
          {productData &&
            productData.map((el, index) => (
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                m={"1rem"}
                key={index}
                w="70%"
              >
                <Image
                  src={el.images[0]}
                  alt="room"
                  w={"100%"}
                  h={"330px"}
                ></Image>
                <Box>
                  <Heading m={"1rem 0"} size={"md"}>
                    {el.title}
                  </Heading>
                  <Box display={"flex"} justifyContent="space-around">
                    <Text>Size: {el.size.join(' ')}</Text>
                    <Text>{el.discount}</Text>
                  </Box>
                  <p style={{ color: "green" }}>Cost : ₹{el.discounted_price}</p>
                  <Button
                    variant="solid"
                    colorScheme={"teal"}
                    m={"1rem 0"}
                    w="100px"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}
        </Box> : <Heading>No Product Data</Heading>
      } */}




      {(kidsFlag && kidsData.length !== 0) ?
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
          {kidsData &&
            kidsData.map((ele, index) => (
              <Box
                key={index}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                padding="10px"
                borderRadius={"10px"}
                w="70%"
              >
                <Image src={ele.images[0]} alt="child image" w="100%"></Image>
                <Text textAlign={"center"}>Category: {ele.category}</Text>
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "22px", sm: "18px", lg: "22px", xl: "22px" }}
                >
                  {ele.title}
                </Text>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text color={"black"}>Discount: ₹{ele.discounted_price}</Text>
                  <Text color={"green"}>
                    Original Price: ₹{ele.strike_price}
                  </Text>
                </Box>
                <Text
                  textAlign={"center"}
                  color="black"
                >
                  {ele.discount}
                </Text>
                <Text textAlign={"center"} color={"black"}>
                  Rating: {`${ele.rating} ---> ${ele.rating_count}`}
                </Text>
                <Button
                  variant="solid"
                  colorScheme={"teal"}
                  m={"1rem 0"}
                  w="100px"
                  onClick={() => handleRemoveKids(index)}
                >
                  Remove
                </Button>
              </Box>
            ))}
        </Box> : <Heading>No Kits Data</Heading>}




      {(beautyFlag && beautyData.length !== 0) ?
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
          {beautyData &&
            beautyData.map((el, index) => (
              <Box
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                m={"1rem"}
                key={index}
                w="70%"
              >
                <Image
                  src={el.image}
                  alt="room"
                  w={"100%"}
                  h="240px"
                ></Image>
                <Box>
                  <p>Brand : {el.brand}</p>
                  <Box display={"flex"} justifyContent="space-around">
                    <Text>{el.size}</Text>
                    <Text>{el.discountPercentage}</Text>
                  </Box>
                  <p style={{ color: "green" }}>Cost : ₹{el.discountedPrice || 100}</p>
                  <Button
                    variant="solid"
                    colorScheme={"teal"}
                    m={"1rem 0"}
                    w="100px"
                    onClick={() => handleRemoveBeauty(index)}
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}
        </Box> : <Heading>No Beauty Data</Heading>}



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
  );
};

export default Cart;
