import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

import { BsCartXFill } from "react-icons/bs";
import { Input } from "@chakra-ui/input";
import CheckoutAlert from "./CheckoutAlert";
import {
  Spinner,
  useToast,
  Flex,
  Image,
  Button,
  Text,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
  Container,
  Center,
} from "@chakra-ui/react";

var totalAmount = 0;
const Checkout = () => {
  const nevigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(false);
  const toast = useToast();

  //  Input useState
  const [cardNo, setCardNo] = useState("");
  const [date, setDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCVV] = useState("");

  const [cartData, setCartData] = useState("");
  const [hotelFlag, setHotelFlag] = useState(false);
  const [productData, setProductData] = useState("");
  const [productFlag, setProductFlag] = useState(false);
  const [kidsData, setKidsData] = useState([]);
  const [kidsFlag, setKidsFlag] = useState(false);
  const [beautyData, setbeautyData] = useState([]);
  const [beautyFlag, setbeautyFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 3000);
    totalAmount = localStorage.getItem("cartTotal") || 0;
    setCartData(JSON.parse(localStorage.getItem("hotelcart")) || []);
    setHotelFlag(localStorage.getItem("hotelFlag"));
    setProductFlag(localStorage.getItem("productFlag"));
    setProductData(JSON.parse(localStorage.getItem("productcart")) || []);
    setKidsData(JSON.parse(localStorage.getItem("kidscart")) || []);
    setKidsFlag(localStorage.getItem("kidFlag"));
    setbeautyData(JSON.parse(localStorage.getItem("beautycart")) || []);
    setbeautyFlag(localStorage.getItem("beautyFlag"));
  }, []);

  //   Geting year for date chec
  const d = new Date();
  const year = d.getFullYear().toString();

  const handleCheckout = () => {
    let x = 0;
    let put = "";
    for (let i = 0; i < cardNo.length; i++) {
      if (cardNo[i] == "-") {
        x++;
        put += "-";
      } else {
        put += "x";
      }
    }

    if (cardNo == "" || date == "" || cardName == "" || cvv == "") {
      toast({
        position: "top",
        title: "Something went wrong",
        description: `${"Please Fill All Inputs"}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (cardNo.length <= 18 || x < 3) {
      toast({
        position: "top",
        title: "Something went wrong",
        description: `${`Please Use Proper Formate xxxx-xxxx-xxxx-xxxx`}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (date[2] + date[3] < year[2] + year[3]) {
      toast({
        position: "top",
        title: "Something went wrong",
        description: `${"Your Card Is Expire"}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (cvv.length <= 2) {
      toast({
        position: "top",
        title: "Something went wrong",
        description: `${"Please Enter Proper CVV Minimum 3 Letter"}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setImageSrc(true);
      setTimeout(() => {
        nevigate("/");
        localStorage.removeItem("cartTotal");
        localStorage.removeItem("beautyFlag");
        localStorage.removeItem("productFlag");
        localStorage.removeItem("kidFlag");
        localStorage.removeItem("hotelFlag");
        localStorage.removeItem("hotelcart");
        localStorage.removeItem("productcart");
        localStorage.removeItem("beautycart");
        localStorage.removeItem("kidscart");
        localStorage.removeItem("cartTotal");
        window.localStorage.clear();
      }, 4000);
    }
  };

  return (
    <Box shadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
      <SimpleGrid columns={2} margin={7} gap={2}>
        <>
          <Box mt={{ base: "5%", sm: "10%", lg: "5%" }} m={"20px"}>
            <Center>
              <Heading pl={"25px"} pb={7}>
                {" "}
                Cart Summary (
                {cartData.length +
                  beautyData.length +
                  kidsData.length +
                  productData.length}
                ){" "}
              </Heading>
            </Center>
            {loading && <Spinner ml={"40%"} size={"xl"} color="red.500" />}

            {hotelFlag && cartData.length !== 0 ? (
              <Box display={"grid"} textAlign="center">
                {cartData &&
                  cartData.map((el, index) => (
                    <Box
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                      m={"1rem"}
                      key={el.id}
                      w="100%"
                    >
                      <HStack justifyContent={"space-around"}>
                        <Image
                          src={el.image_url}
                          alt="room"
                          w={"10%"}
                          h={"20%"}
                        ></Image>

                        <p style={{ fontSize: "12px" }}>
                          {" "}
                          {el.category.toUpperCase()} ROOM
                        </p>
                        <p style={{ color: "green" }}>
                          Cost : ₹{el.cost || 100}
                        </p>
                      </HStack>
                    </Box>
                  ))}
              </Box>
            ) : null}

            {productFlag && productData.length !== 0 ? (
              <Box display={"grid"} textAlign="center">
                {productData &&
                  productData.map((el, index) => (
                    <Box
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                      m={"1rem"}
                      key={index}
                      w="100%"
                    >
                      <HStack justifyContent={"space-around"}>
                        <Image
                          src={el.images[0]}
                          alt="room"
                          w={"10%"}
                          h={"20%"}
                        ></Image>

                        <p style={{ fontSize: "12px" }}>Brand : {el.title}</p>
                        <p style={{ color: "green" }}>
                          Cost : ₹{el.discounted_price || 100}
                        </p>
                      </HStack>
                    </Box>
                  ))}
              </Box>
            ) : null}

            {kidsFlag && kidsData.length !== 0 ? (
              <Box display={"grid"} textAlign="center">
                {kidsData &&
                  kidsData.map((ele, index) => (
                    <Box key={index} m={"1rem"} w="100%">
                      <HStack justifyContent={"space-around"}>
                        <Image
                          src={ele.images[0]}
                          alt="room"
                          w={"10%"}
                          h={"20%"}
                        ></Image>

                        <p style={{ fontSize: "12px" }}>Brand : {ele.title}</p>
                        <p style={{ color: "green" }}>
                          Cost : ₹{ele.discounted_price || 100}
                        </p>
                      </HStack>
                    </Box>
                  ))}
              </Box>
            ) : null}

            {beautyFlag && beautyData.length !== 0 ? (
              <Box display={"grid"} textAlign="center">
                {beautyData &&
                  beautyData.map((el, index) => (
                    <Box
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                      key={index}
                      w={"100%"}
                      m={"1rem"}
                    >
                      <HStack justifyContent={"space-around"}>
                        <Image
                          src={el.image}
                          alt="room"
                          w={"10%"}
                          h={"20%"}
                        ></Image>

                        <p style={{ fontSize: "12px" }}>Brand : {el.brand}</p>
                        <p style={{ color: "green" }}>
                          Cost : ₹{el.discountedPrice || 100}
                        </p>
                      </HStack>
                    </Box>
                  ))}
              </Box>
            ) : null}
          </Box>
        </>
        <Box>
          <Box> {loading && <Spinner size={"lg"} />} </Box>
          <Box>
            {imageSrc === true ? (
              <CheckoutAlert />
            ) : (
              <Box id="master">
                <Box id="main">
                  <Box id="b1">
                    <Heading>Congratulations!</Heading>
                    <Heading>You are now a Premium Member</Heading>
                  </Box>
                  <Box id="b2" padding={"5%"}>
                    <Box padding={"5%"}>
                      <Box gap="5px">
                        <Heading>
                          Total Amount to be paid: ₹ {totalAmount}
                        </Heading>
                      </Box>
                      <Box
                        action=""
                        id="payment"
                        mt={"1%"}
                        display="flex"
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        gap="5%"
                        p={"5%"}
                      >
                        <Input
                          isInvalid={cardNo == ""}
                          value={cardNo}
                          onChange={(e) => setCardNo(e.target.value)}
                          mt="2%"
                          id="card_number"
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9\s]{13,19}"
                          autoComplete="cc-number"
                          maxLength="19"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                        />
                        <Input
                          isInvalid={date == ""}
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          mt="2%"
                          type="date"
                          id="expiry"
                          placeholder="Expiry"
                        />
                        <Input
                          isInvalid={cardName == ""}
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          mt="2%"
                          type="text"
                          id="holder"
                          placeholder="Card Holder Name"
                        />
                        <Input
                          isInvalid={cvv == ""}
                          value={cvv}
                          onChange={(e) => setCVV(e.target.value)}
                          mt="2%"
                          type="password"
                          maxLength="3"
                          minLength="3"
                          placeholder="CVV"
                        />
                        <Button
                          fontSize={"20px"}
                          padding={"25px"}
                          bg="pink.300"
                          variant={"outline"}
                          textAlign={"center"}
                          m="auto"
                          mt="2%"
                          w={"100px"}
                          type="submit"
                          id="checkout"
                          onClick={handleCheckout}
                        >
                          Checkout
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Checkout;
