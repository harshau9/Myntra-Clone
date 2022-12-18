import {
  Alert,
  AlertIcon,
  Spinner,
  Box,
  Image,
  Heading,
  Text,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Pagination from "./Pagination";
import "./Carousel.css";
import MainNavbar from "../../components/Navbar/MainNavbar";
import Carousel1 from "./Carousel1";
let totalPages = 10;
const Kids = () => {
  const [childData, setChildData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = async (page = 1) => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setError(false);
      let res = await fetch(
        `https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Child&_limit=10&_page=${page}`
      );
      res = await res.json();
      setChildData(res);
      // console.log(res);
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

  const handlePageChange = (val) => {
    setPage(val);
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      setError(false);
      let res = await fetch(
        `https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Child&_limit=10&_page=${page}&_sort=strike_price&_order=${value}`
      );
      res = await res.json();
      setChildData(res);
      // console.log(res);
    } catch (err) {
      setLoading(false);
      setError(true);
      Toast({
        title: 'Something went wrong',
        description: `${err.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <MainNavbar />
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

        {/* <Box m="auto" className="slideshow"></Box> */}

        <Box m="1% 0">
          <select onChange={handleChange}>
            <option value={""}>Sort by Price</option>
            <option value={"asc"}>Ascending</option>
            <option value={"desc"}>Descending</option>
          </select>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(5, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
            xl: "repeat(5, 1fr)",
          }}
          gap="10px"
        >
          {childData &&
            childData.map((ele, index) => (
              <Box
                key={index}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
                padding="10px"
              >
                <Image src={ele.images} alt=""></Image>
                <Text textAlign={"center"}>Category: {ele.category}</Text>
                <Text
                  textAlign={"center"}
                  fontFamily={"cursive"}
                  fontSize={{ base: "22px", sm: "18px", lg: "22px", xl: "22px" }}
                >
                  {ele.title}
                </Text>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text color={"green"}>Discount: ₹{ele.discounted_price}</Text>
                  <Text color={"goldenrod"}>
                    Original Price: ₹{ele.strike_price}
                  </Text>
                </Box>
                <Text
                  fontSize={{ base: "23px", sm: "18px", lg: "23px", xl: "23px" }}
                  textAlign={"center"}
                  fontFamily={"cursive"}
                  color="blue.700"
                >
                  {ele.discount}
                </Text>
                <Text textAlign={"center"} color={"yellow.300"}>
                  Rating: {`${ele.rating} ---> ${ele.rating_count}`}
                </Text>
              </Box>
            ))}
        </Box>
        <Box m={"1% 0"} textAlign="center">
          <Pagination totalPages={totalPages} currentPage={page} handlePageChange={handlePageChange} />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Kids;
