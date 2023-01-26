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
  useToast,
  Center,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Blocks } from "react-loader-spinner";

import getData from "../../Redux/UserData/action";
import { signup } from "../../Redux/Authentication/action";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signuploading, signupError } = useSelector(
    (store) => store.authReducer
  );

  const data = useSelector((store) => store.signupReducer);

  const { userData, loading, error } = useSelector(
    (store) => store.dataReducer
  );

  const handleSignup = () => {
    if (
      data.firstName &&
      data.lastName &&
      data.email &&
      data.password &&
      data.phoneNumber
    ) {
      if (data.password.length >= 8) {
        const verifyUser = userData.filter(
          (el) => el.phoneNumber === data.phoneNumber
        );
        if (verifyUser.length > 0) {
          toast({
            title: "already registered",
            status: "info",
            duration: 5000,
            isClosable: true,
          });
          dispatch({ type: "initialState" });
        } else {
          dispatch(signup(data));
          navigate("/login");
          toast({
            title: "success",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Password must be at least 8 characters long",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please fill all the fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    dispatch(getData());
    if (signupError === true) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, []);

   if (error) {
     return <Navigate to="/error" replace={true} />;
   }

  return (
    <>
      {loading ? (
        <Center>
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        </Center>
      ) : (
        <Flex
          align={"center"}
          justify={"center"}
          backgroundColor="#fdedf0"
          border={"none"}
        >
          <Stack
            spacing={4}
            w={"full"}
            maxW={"sm"}
            bg={"white"}
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
                        <FormControl id="FirstName" isRequired={true}>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            type="text"
                            value={data.firstName}
                            onChange={(e) =>
                              dispatch({
                                type: "firstName",
                                payload: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="LastName" isRequired>
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            type="text"
                            value={data.lastName}
                            onChange={(e) =>
                              dispatch({
                                type: "lastName",
                                payload: e.target.value,
                              })
                            }
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="PhoneNumber" isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="number"
                        value={data.phoneNumber}
                        onChange={(e) =>
                          dispatch({
                            type: "phoneNumber",
                            payload: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl id="Email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="Email"
                        value={data.email}
                        onChange={(e) =>
                          dispatch({
                            type: "email",
                            payload: e.target.value,
                          })
                        }
                      />
                    </FormControl>
                    <FormControl id="Password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "Password"}
                          value={data.password}
                          onChange={(e) =>
                            dispatch({
                              type: "password",
                              payload: e.target.value,
                            })
                          }
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
                        isLoading={signuploading}
                        loadingText="Submitting"
                        size="lg"
                        bg={"red.500"}
                        color={"white"}
                        _hover={{
                          bg: "red.500",
                        }}
                        onClick={handleSignup}
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
                    rel="noreferrer"
                  >
                    <span style={{ color: "red" }}>Get help</span>
                  </a>
                </Text>
              </Stack>
              <Stack>
                <Text color="gray.500">
                  Already a User ?{" "}
                  <Link to={"/login"}>
                    <span style={{ color: "red" }}>Login</span>
                  </Link>
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      )}
    </>
  );
}
