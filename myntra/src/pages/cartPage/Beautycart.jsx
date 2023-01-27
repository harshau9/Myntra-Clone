import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Spinner,
  useToast,
  Heading,
  Button,
  Text,
  SimpleGrid,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";
export const Beautycart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getData = () => {
    var val = JSON.parse(localStorage.getItem("beauty"));
   
    setData(val)
    
  };
  console.log(data)
  var total = 0;
  for (let ele of data) {
    if(ele.discountedPrice==undefined){
        ele.discountedPrice=120
    }
    total += Number(ele.discountedPrice);
  }
  localStorage.setItem("beautyPrice", total);

  useEffect(() => {
    getData();
  }, []);
 

  return (
    <div>
      
        <div>
          {/* <img src={e.image}width={"100px"}/>
             <div>{e.discountedPrice}</div> */}
          <Box mt={{ base: "5%", sm: "10%", lg: "5%" }}>
            <Box display={"flex"} justifyContent="space-around" mb={"1%"}>
              <Heading fontSize={"20px"} display={"flex"} gap="10px">
                Total Quantity:-{" "}
                <Text fontSize={"20px"} color={"pink.500"}>
                   {data.length!==null?data.length:0}
                </Text>
              </Heading>
              <Heading fontSize={"20px"} display={"flex"} gap="10px">
                Total Price:-{" "}
                <Text fontSize={"20px"} color={"pink.500"}>
                 Rs. {total}
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
                {data.length!==null?
                  data.map((ele, i) => (
                  <>
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
                            <Image
                              src={ele.image?ele.image:`https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20872918/2022/11/22/9a26f8d3-0d99-49ea-80dd-7f42c26c25141669139346375KajalandEyeliner1.jpg`}
                              alt="Image"
                              width="200px"
                            />
                          </Box>
                        </Flex>
                        {/* //part2-line 46 to 71 */}
                        <Flex
                          flexDirection={"column"}
                          border={"0px solid green"}
                        >
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
                            {ele.discountedPrice? `Rs:- ${ele.discountedPrice}`:" Rs:-100"}
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
                     
                    </Flex>
                  </>
                )):<SimpleGrid>
                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />
              </SimpleGrid>
            
            }
              </SimpleGrid>
            )}

            <hr />
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <Button
                variant="solid"
                colorScheme={"teal"}
                m={"1rem 0"}
                w="100px"
               onClick={()=>navigate("/checkout")}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </div>
      ))
      {/* <Button onClick={()=>navigate("/")} >Checkout</Button> */}
    </div>
  );
};
