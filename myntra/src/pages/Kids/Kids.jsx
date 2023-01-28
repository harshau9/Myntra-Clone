import {
  Alert,
  AlertIcon,
  Spinner,
  Box,
  Image,
  Heading,
  Text,
  Toast,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./Carousel.css";
import Carousel1 from "./Carousel1";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";


let totalPages = 4;
const Kids = () => {
  const [childData, setChildData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [priceChild, setPriceChild] = useState("asc");
  const [valClild, setValChild] = useState("");
  const { isAuth } = useSelector((store) => store.dataReducer);
  const navigate = useNavigate();
  const toast = useToast();


  useEffect(() => {
    getData(page, priceChild, valClild);
  }, [page, priceChild, valClild]);


  const getData = async (page = 1, priceChild, valClild) => {
    try {
      if (valClild != "") {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setError(false);
        let res = await fetch(
          `${process.env.REACT_APP_CHILD_BASEURL}?_page=${page}&_limit=10&_sort=strike_price&_order=${priceChild}&title=${valClild}`
        );
        res = await res.json();
        setChildData(res);
      } else {
        // console.log(priceChild);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setError(false);
        let res = await fetch(
          `${process.env.REACT_APP_CHILD_BASEURL}?_page=${page}&_limit=10&_sort=strike_price&_order=${priceChild}`
        );
        res = await res.json();
        setChildData(res);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      Toast({
        title: 'Something went wrong',
        description: `${err.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  };

  let arr = [];
  const handleClick = (ele) => {
    if (isAuth === true) {
      arr.push(ele);
      localStorage.setItem("kidscart", JSON.stringify(arr));
      localStorage.setItem("kidFlag", true);
      toast({
        title: 'Successfully',
        description: "Product added successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } else {
      navigate("/login");
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setPriceChild(value)
    getData(page, priceChild);
  };

  const handlePageChange = (val) => {
    setPage(val);
  };

  return (
    <>
      <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
        {error && (
          <Alert w={"400px"} m={"auto"} status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        )}

        <Carousel1 />

        <Heading m={"10px 0"} textAlign="center">
          FASHION & ESSENTIALS
        </Heading>

        {loading && <Spinner size={"xl"} color="red.500" />}


        <Box m="1% 0" display={"flex"} flexDirection="row" gap={"13%"} justifyContent="center" alignItems={"center"}>
          <Box border={"1px solid black"}>
            <select onChange={handleChange}>
              <option value={"asc"}>Sort by Price</option>
              <option value={"asc"}>Ascending</option>
              <option value={"desc"}>Descending</option>
            </select>
          </Box>

          <Box>
            <Text color={"black"} as="b">
              FILTERS BY TITLE
            </Text>
            <Stack p="5px" pt={5} pb={5}>
              <hr />
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="HELLCAT"
                  checked={valClild === "HELLCAT"}
                  onChange={(e) => setValChild(e.target.value)}
                />
                <Text fontSize={"14px"}>HELLCAT</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="MANZON"
                  checked={valClild === "MANZON"}
                  onChange={(e) => setValChild(e.target.value)}
                />
                <Text fontSize={"14px"}>MANZON</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="VASTRAMAY"
                  checked={valClild === "VASTRAMAY"}
                  onChange={(e) => setValChild(e.target.value)}
                />
                <Text fontSize={"14px"}>VASTRAMAY</Text>
              </HStack>
            </Stack>
          </Box>


        </Box>


        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(4, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="25px"
        >
          {childData &&
            childData.map((ele, index) => (
              <Box
                key={index}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                padding="10px"
                borderRadius={"10px"}
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
                <Box textAlign={"center"} mt="10px"> <Button variant={"outline"} bg="teal" w="50%" onClick={() => handleClick(ele)}>Add To Cart</Button> </Box>
              </Box>
            ))}
        </Box>
        <Box m="auto" mt="2%" mb="1%" textAlign="center" w="100px" display={"flex"} alignItems="center" justifyContent={"center"}>
          <Pagination totalPages={totalPages} currentPage={page} handlePageChange={handlePageChange} />
        </Box>
      </Box>
    </>
  );
};

export default Kids;