import {
  Box,
  Grid,
  Flex,
  Spacer,
  Text,
  Image,
  SimpleGrid,
  Button,
  useToast,
  Checkbox,
  CheckboxGroup,
  Container,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { BsHeart, BsImage } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { BsStar } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const getuserData = async () => {
  try {
    let res = await axios.get(`https://mock-server-trz7.onrender.com/User`);
    return await res.data;
  } catch (e) {
    return e;
  }
};

export const Beauty = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const [boxwidth, setBoxwidth] = useState("");
  const [userData, setUserData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [Hover, setHover] = useState(false);
  const { id, isAuth } = userData;
  const navigate = useNavigate();
  const [val, setVal] = React.useState("");
  const [val2, setVal2] = React.useState("");
  const [val3, setVal3] = React.useState("");

  const [CrouselBox, setCrouselBox] = useState(false);
  const toast = useToast();
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
        description: `${e.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  // const totalPages = Math.floor(data.length / 25);

  async function getData(page, val, val2, val3) {
    // console.log("30", page);
    if (val) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&category=${val}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else if (val2) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&subcategory=${val2}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else if (val3) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&color=${val3}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    }
  }

  useEffect(() => {
    getData(page, val, val2, val3);
  }, [page, val, val2, val3]);

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };
  const handleAddToCart = (el) => {
    if (isAuth === true) {
      postUserCartData({ CartPage: [el] })
        .then(() => {
          toast({
            title: "Successfully",
            description: "Product added successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: "Something went wrong",
            description: `${err.message}`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Box width={"97%"}  gap="2px" m={"auto"} bg="white">
        <Box p="10px" textAlign={"start"}>
          <Text color="black">Home/ Personal Care</Text>
        </Box>
        <Box p="10px" textAlign={"start"}>
          <Text as="b" color="black">
            Personal Care - {data.length} items
          </Text>
        </Box>

        <hr style={{ paddingBottom: "40px" }} />
        {/* ------------------------------ */}
        <Box display={"flex"}>
          <Box w="22%" p="1">
            <Text color={"black"} as="b">
              FILTERS
            </Text>
            <Stack p="5px" pt={5} pb={5}>
              <hr />
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="Men"
                  checked={val === "Men"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text fontSize={"14px"}>Men</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="Women"
                  checked={val === "Women"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text fontSize={"14px"}>Women</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="Boys"
                  checked={val === "Boys"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text fontSize={"14px"}>Boys</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="radio"
                  value="Girls"
                  checked={val === "Girls"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text fontSize={"14px"}>Girls</Text>
              </HStack>
            </Stack>
            {/* =========================== */}
            <hr style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <br />
            {/* ------------------------------ */}

            <Text color={"black"} as="b" p={"5px"} pb={5}>
              CATEGORIES
            </Text>

            <Stack pl={1} mt={1} spacing={1}>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  onChange={(e) => setVal2(e.target.value)}
                  value="Lipstick"
                  checked={val2 === "Lipstick"}
                />

                <Text fontSize={"14px"} > Lipstick</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Nail Polish"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Nail Polish"
                />

                <Text fontSize={"14px"}> Nail Polish</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Perfume and Body Mist"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Perfume and Body Mist"
                />

                <Text fontSize={"14px"} > Perfume and Body Mist</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Beauty Accessory"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Beauty Accessory"
                />

                <Text fontSize={"14px"}>Beauty Accessory</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Body Wash and Scrub"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Body Wash and Scrub"
                />

                <Text fontSize={"14px"}> Body Wash and Scrub</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Body Oil"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Body Oil"
                />

                <Text fontSize={"14px"}> Body Oil</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Shampoo and Conditioner"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Shampoo and Conditioner"
                />

                <Text fontSize={"14px"}> Shampoo and Conditioner</Text>
              </HStack>
              <HStack width={"30%"}>
                <input
                  type="checkbox"
                  checked={val2 === "Face Wash and Cleanser"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Face Wash and Cleanser"
                />

                <Text fontSize={"14px"}>Face Wash and Cleanser</Text>
              </HStack>
            </Stack>


            {/* =========================== */}
            <hr style={{ paddingTop: "5px", paddingBottom: "5px" }} />
            <Text color={"black"} as="b" p={"5px"} pb={5}>
              COLOR
            </Text>

            <Stack pl={1} mt={1} spacing={1}>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "White"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="White"
                />

                <Text fontSize={"14px"}> White</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Black"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Black"
                />

                <Text fontSize={"14px"}> Black</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Pink"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Pink"
                />

                <Text fontSize={"14px"}> Pink</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Multi"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Multi"
                />

                <Text fontSize={"14px"}>Multi</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Brown"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Brown"
                />

                <Text fontSize={"14px"}> Brown</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Green"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Green"
                />

                <Text fontSize={"14px"}> Green</Text>
              </HStack>
              <HStack width={"20%"}>
                <input
                  type="checkbox"
                  checked={val3 === "Red"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Red"
                />

                <Text fontSize={"14px"}> Red</Text>
              </HStack>
            </Stack>
            {/* ------------- */}
          </Box>
          {/* --------------- */}
          <Box>
            <Flex display={["none", "flex", "Flex"]}>
              <Flex>
                {/* <FilterBox /> */}
                {Loading || data.length == 0 ? (
                  <Box m="auto" justifyContent={"center"}>
                    {" "}
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Box>
                ) : (
                  <Box w="90%" m="auto">
                    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
                      {data.length == 0 ? (
                        <Box m="auto" w={"100%"} justifyContent={"center"}>
                          {" "}
                          <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="blue.500"
                            size="xl"
                          />
                        </Box>
                      ) : (
                        <>
                          {data.map((e, i) => {
                            return (
                              <Box
                                key={i / Date.now()}
                                boxShadow="lg"
                                rounded="md"
                                bg="white"
                                onMouseEnter={() => setHover(false)}
                                onMouseLeave={() => setHover(true)}
                              >
                                <Box bg="white" h={["26rem", "26rem", "26rem"]}>
                                  <Box
                                    h="13.5rem"
                                    overflow="hidden"
                                    // onClick={() =>
                                    //   handleClick(e._id, e.product)
                                    // }
                                  >
                                    {/* <CrousalBox data={product} CrouselBox={CrouselBox} /> */}
                                    <Image src={e.image} />
                                  </Box>
                                  <Box p="15px" pt={["34px", "20px", "20px"]}>
                                    <Box pb="18px" mb="40px">
                                      <Grid gap="1">
                                        <Text textAlign={"start"}>
                                          <Text as="b" color="black">
                                            {e.brand}
                                          </Text>
                                          <Text color="black" fontSize={13}>
                                            {e.product}
                                          </Text>
                                        </Text>
                                        <Text color="black">
                                          {" "}
                                          <Flex gap="3">
                                            <Box w="25px" mt="3px">
                                              {e.rating ? <BsStar /> : ""}
                                            </Box>
                                            <Text fontSize={"14px"}>
                                              {e.rating} {e.separator}{" "}
                                              {e.ratingCount}
                                            </Text>
                                          </Flex>
                                        </Text>
                                        {Hover ? (
                                          <></>
                                        ) : (
                                          <>
                                            <Button
                                              mb="2"
                                              borderRadius={"0px"}
                                              w="100%"
                                              border={"1px solid black"}
                                              gap="3"
                                            >
                                              <Text textAlign={"start"}>
                                                <BsHeart color="black" />
                                              </Text>{" "}
                                              <Text
                                                color="black"
                                                // onClick={() => {
                                                //   let item = e;
                                                //   addWishlist(
                                                //     // e.brand,
                                                //     // e.discountPercentage,
                                                //     // e.discountedPrice
                                                //     item
                                                //   );
                                                // }}
                                                onClick={() =>
                                                  handleAddToCart(e)
                                                }
                                              >
                                                WISHLIST
                                              </Text>
                                            </Button>
                                            <Text fontSize={"14px"}>
                                              Size:- {e.size}
                                            </Text>
                                          </>
                                        )}
                                        <SimpleGrid columns={3} spacing={[0]}>
                                          <Text
                                            fontSize={["sm", "sm", "sm"]}
                                            textAlign={"start"}
                                          >
                                            <Text as="b" color="black">
                                              {e.discountedPrice
                                                ? `Rs. ${e.discountedPrice}`
                                                : ""}
                                            </Text>
                                          </Text>
                                          <Text
                                            fontSize={["sm", "sm", "sm"]}
                                            color="black"
                                            as="del"
                                          >
                                            {e.strike ? `Rs. ${e.strike}` : ""}
                                          </Text>
                                          <Text
                                            fontSize={["sm", "sm", "sm"]}
                                            color="orange"
                                          >
                                            {e.discountPercentage}
                                          </Text>
                                        </SimpleGrid>{" "}
                                      </Grid>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            );
                          })}
                        </>
                      )}
                    </SimpleGrid>
                  </Box>
                )}
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Container mt={"30px"} w={"400px"} mb="5">
        <Box display={"flex"} justifyContent="space-between" gap={4} color={"pink.500"}>
          <Button disabled={page == 1} onClick={() => handlePage(-1)}>
            PREV
          </Button>
          <Button color={"red"}>{page}</Button>
          <Button onClick={() => handlePage(1)}>NEXT</Button>
        </Box>
      </Container>
    </>
  );
};
