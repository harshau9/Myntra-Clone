import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Img } from "@chakra-ui/image";
import CheckoutAlert from "./CheckoutAlert";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Checkout = () => {
  const nevigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(false);
  const [TotalProduct, setTotalProduct] = useState(0);
  const [TotalRoom, setTotalRoom] = useState(0);

  const toast = useToast();

  //  Input useState
  const [cardNo, setCardNo] = useState("");
  const [date, setDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCVV] = useState("");

  //   Geting year for date chec
  const d = new Date();
  const year = d.getFullYear().toString();

  const handleCheckout = () => {

    let x = 0
    let put = ""
    for(let i = 0; i < cardNo.length; i++){
      if(cardNo[i] == "-"){
        x++
        put+="-"
      }else{
        put+="x"
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
        description: `${"Please Enter Proper CVV Minimum 3 Latter"}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      setImageSrc(true);
      setTimeout(() => {
        nevigate("/");
      }, 4000);
    }
  };


 

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("MyntShopCartTotal"))
    let y = JSON.parse(localStorage.getItem("MyntShopHotelTotal"))
    setTotalProduct(x)
    setTotalRoom(y)
  }, []);

  return (
    <Box>
      <Box mt={"5%"}>
        {imageSrc === true ? (
          <CheckoutAlert />
        ) : (
          <Box id="master">
            <Box id="main">
              <Box id="b1">
                <Img src={imageSrc} alt="" />
                <Heading>Congratulations!</Heading>
                <Heading>You are now a Premium Member</Heading>
              </Box>
              <Box id="b2" padding={"5%"}>
                <Box padding={"5%"}>
                   <Box gap="5px">
                   <Heading>Room Cart Amount - {TotalRoom}</Heading>
                    <Heading>Product Cart Amount - {TotalProduct}</Heading>
                    
                  <Heading>Total Amount to be paid: ₹ {TotalProduct + TotalRoom}</Heading>
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
  );
};

export default Checkout;
