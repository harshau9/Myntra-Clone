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
} from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import React, { useEffect, useState } from "react";

import { BsStar } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";

import MainNavbar from "../../components/Navbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
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
  const [data, setdata] = useState([]);
  const [value, setValue] = useState("");

  const [boxwidth, setBoxwidth] = useState("");
  const [userData, setUserData] = useState({});
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [Hover, setHover] = useState(false);
  const { id, isAuth } = userData;
  const navigate = useNavigate();

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
  async function getData(page, value) {
    // console.log("30", page);

    setLoading(true);
    if (value === "") {
      await axios
        .get(
          `https://myntradata-39agumdo9-aloki9singh.vercel.app/makeup?_page=${page}&_limit=20`
        )
        .then((res) => {
          setLoading(false);
          setdata(res.data);
          // console.log(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .get(
          `https://myntradata-39agumdo9-aloki9singh.vercel.app/makeup?_page=${page}&_limit=20&product_type=${value}`
        )
        .then((res) => {
          setLoading(false);
          setdata(res.data);
          console.log(res.data);
        });
    }
  }
  useEffect(() => {
    getData(page, value);
    getuserData()
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, [page, value]);
  console.log(data);

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };
  const handleAddToCart = (el) => {
    if (isAuth === true) {
      postUserCartData({ CartPage: [el] })
        .then((res) => {
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
      <MainNavbar />

      <Box width={"95%"} gap="10px" m={"auto"} bg="white">
        <Box
          p="10px"
          textAlign={"start"}
          // onClick={() => Sortfunction("Price High to Low")}
        >
          <Text color="black">Home/ Personal Care</Text>
        </Box>
        <Box p="10px" textAlign={"start"}>
          <Text as="b" color="black">
            Personal Care - {data.length} items
          </Text>
        </Box>

        <Flex display={["none", "flex", "Flex"]}>
          <Box w="25%" p="3">
            <Flex p="10px">
              <Text color={"black"} as="b">
                FILTER
              </Text>
              <Spacer />
            </Flex>
          </Box>
        </Flex>

        <Flex>
          {/* left */}

          <Box w="18%" display={["none", "initial", "initial", "initial"]}>
            <Box border={"1px solid lightgray"} p="10px">
              <Text color={"black"} textAlign={"start"} mt="5px" mb="10px">
                <Text as="b">CATEGORIES</Text>
              </Text>
              {/* onChange={setValue} value={value} */}
              <CheckboxGroup>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("lipstick");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Lipstick</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("lip_liner");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Lip Liner</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("foundation");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Foundation</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("eyeliner");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">EyeLiner</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("eyeshadow");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">EyeShadow</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("eyebrow");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Eyebrow</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("blush");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Blush</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("bronzer");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Bronzer</Text>
                  </Checkbox>
                </Box>
                <Box textAlign={"start"}>
                  <Checkbox
                    defaultChecked={false}
                    onChange={() => {
                      setValue("mascara");
                    }}
                    colorScheme="red"
                  >
                    <Text color="black">Mascara</Text>
                  </Checkbox>
                </Box>
              </CheckboxGroup>
            </Box>
          </Box>

          {/* right */}
          {Loading ? (
            <Box m="auto">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          ) : (
            <Box w="80%" m="auto">
              {/* <select>
                <option value={"asc"}>Low to high</option>
                <option value={"desc"}>High to low</option>
              </select> */}
              <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5} rowGap={9}>
                {data.length == 0 ? (
                  <> Loading...</>
                ) : (
                  <>
                    {data.map((data, i) => (
                      <Box
                        w={"210px"}
                        key={data.id}
                        boxShadow="lg"
                        rounded="md"
                        bg="white"
                      >
                        <Box bg="white" h={["26rem", "26rem", "26rem"]}>
                          <Box
                            // onMouseEnter={() => }
                            // onMouseLeave={() => setCrouselBox(false)}
                            h="13.5rem"
                            overflow="hidden"
                          >
                            <Box h="13.5rem">
                              <Image src={data.api_featured_image} />
                            </Box>
                          </Box>
                          <Box
                            p="15px"
                            pt={["34px", "20px", "20px"]}
                            // onMouseEnter={() => setHover(true)}
                            // onMouseLeave={() => setHover(false)}
                          >
                            <Box pb="18px" mb="40px" h={"100px"}>
                              <Grid gap="1">
                                <Text textAlign={"start"}>
                                  <Text as="b" color="black">
                                    {data.name}
                                  </Text>
                                </Text>
                                <Text color="black">{data.product_type}</Text>
                                <Text color="black">
                                  <Flex gap="3">
                                    <Text>{data.rating}</Text>
                                    <Box w="25px" mt="3px">
                                      <BsStar />
                                    </Box>
                                  </Flex>
                                </Text>

                                <SimpleGrid columns={2} spacing={[0]}>
                                  <Text
                                    fontSize={["sm", "sm", "sm"]}
                                    textAlign={"start"}
                                  >
                                    <Text as="b" color="black">
                                      {data.price_sign} {data.price}
                                    </Text>
                                  </Text>
                                  <Text
                                    fontSize={["sm", "sm", "sm"]}
                                    color="black"
                                    // as="del"
                                  >
                                    {data.category}
                                  </Text>
                                  <Text
                                    fontSize={["sm", "sm", "sm"]}
                                    color="orange"
                                  >
                                    {/* {data.brand} */}
                                  </Text>
                                </SimpleGrid>
                                <Button
                                  bg="#F167AE"
                                  on
                                  _hover={"none"}
                                  borderRadius={"0px"}
                                  w="100%"
                                  border={"1px solid black"}
                                  gap="3"
                                >
                                  <Text textAlign={"start"}>
                                    <BsCart color="black" />
                                  </Text>{" "}
                                  <Text color="black" onClick={() => handleAddToCart(data)}>ADD TO CART</Text>
                                </Button>
                              </Grid>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </>
                )}
              </SimpleGrid>
            </Box>
          )}
        </Flex>
      </Box>

      <Container mt={"30px"} w={"300px"} mb="5">
        <Box display={"flex"} justifyContent="space-between" color={"pink.500"}>
          <Button disabled={page == 1} onClick={() => handlePage(-1)}>
            PREV
          </Button>
          <Button color={"red"}>{page}</Button>
          <Button onClick={() => handlePage(1)}>NEXT</Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};
