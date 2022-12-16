import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import { GetUserData } from "./LoginPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostRequest = async (data) => {
  try {
    let response = await axios.post(
      `https://mock-server-trz7.onrender.com/User-Data`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (err) {
    return err;
  }
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  let flag;
  const UserData = {
    FirstName,
    LastName,
    PhoneNumber,
    Email,
    Password,
    CartPage: [],
    Wishlist: [],
    PaymentDetail: [],
  };

  const HandleButton = () => {
    if (
      FirstName == "" ||
      LastName == "" ||
      PhoneNumber == "" ||
      Email == "" ||
      Password == ""
    ) {
      toast({
        title: "Please Fill the Required Detail",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
    }

    if (PhoneNumber.length == 10) {
      data.map((item) => {
        if (item.PhoneNumber == PhoneNumber) {
          flag = true;
        }
      });
      setBtn(true);
      if (flag) {
        toast({
          title: `You are already existing user`,
          description: "after few seconds You will redirect to login Page",
          status: "warning",
          duration: 4000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

      if (!flag) {
        PostRequest(UserData)
          .then((res) => {
            toast({
              title: `Signup Successfully`,
              description: "after few seconds You will redirect to Login Page",
              status: "success",
              duration: 4000,
              isClosable: true,
              variant: "left-accent",
              position: "top",
            });
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          })
          .catch((err) => {
            toast({
              title: "Something went wrong",
              description: `${err.message}`,
              status: "error",
              duration: 4000,
              isClosable: true,
              variant: "top-accent",
              position: "top",
            });
          });
      }
    } else {
      toast({
        title: "Please Enter 10 digit Phone Number",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    GetUserData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      });
  }, []);

  return (
    <>
      {<Navbar />}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        backgroundColor="#fdedf0"
        border={"none"}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"sm"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          marginBottom={{
            base: "250px",
            sm: "250px",
            md: "500px",
            lg: "200px",
            xl: "100px",
          }}
          marginTop="25px"
        >
          <img
            src="https://i.ibb.co/WsvGqWS/74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-MYNTRA500.jpg"
            alt="74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-MYNTRA500"
            border="0"
          ></img>
          <Flex p={6} flexDirection="column" gap={5} paddingBottom="100px">
            <Stack>
              <Stack align={"center"}>
                <Heading fontSize={"3xl"} textAlign={"center"}>
                  Sign up
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool Products ✌️
                </Text>
              </Stack>
              <Box>
                <Stack>
                  <HStack>
                    <Box>
                      <FormControl id="FirstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={FirstName}
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="LastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setLastName(e.target.value)}
                          value={LastName}
                        />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl id="PhoneNumber" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={PhoneNumber}
                    />
                  </FormControl>
                  <FormControl id="Email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
                    />
                  </FormControl>
                  <FormControl id="Password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? "text" : "Password"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                      />
                      <InputRightElement h={"full"}>
                        <Button
                          variant={"ghost"}
                          onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"red.500"}
                      color={"white"}
                      _hover={{
                        bg: "red.800",
                      }}
                      onClick={HandleButton}
                      disabled={btn}
                    >
                      Sign up
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
            <Stack>
              <Text color="gray.500">
                Have Trouble logging in ?{" "}
                <a
                  href="https://www.myntra.com/recovery?referer=https%3A%2F%2Fwww.myntra.com%2F"
                  target={"_blank"}
                >
                  <span style={{ color: "red" }}>Get help</span>
                </a>
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </>
  );
}
