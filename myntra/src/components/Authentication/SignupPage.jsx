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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
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
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
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
  );
}
