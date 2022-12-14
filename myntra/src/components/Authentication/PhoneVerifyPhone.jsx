import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftAddon,
  FormControl,
  HStack,
  Center,
  useToast,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";


function VerifyPhoneForm() {
  return (
    <Stack spacing={4}>
      <Center>
        <Heading lineHeight={1.1} fontSize="xl">
          Verify your Phone Number
        </Heading>
      </Center>
      <Center fontSize={{ base: "sm", sm: "md" }}>
        We have sent code to your Phone Number
      </Center>
      <Center fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
        username@mail.com
      </Center>
      <FormControl>
        <Center>
          <HStack>
            <PinInput>
              <PinInputField required />
              <PinInputField required />
              <PinInputField required />
              <PinInputField required />
            </PinInput>
          </HStack>
        </Center>
      </FormControl>
      <Stack spacing={6}>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.700",
          }}
        >
          Verify
        </Button>
      </Stack>
    </Stack>
  );
}

function PhoneNumberInput({ HandleSetNumber, ContinueBtn }) {
  const [num, setnum] = useState("");
  const HandleContinueOnClick = () => {
    HandleSetNumber(num);
  };
  return (
    <>
      <Heading lineHeight={1.1} fontSize="20px">
        Login or Signup
      </Heading>

      <InputGroup>
        <InputLeftAddon children="+91" />
        <Input
          type="tel"
          placeholder="Mobile Number"
          onChange={(e) => setnum(e.target.value)}
          required
        />
      </InputGroup>
      <Text fontSize={{ base: "sm", sm: "md" }} color="gray.500">
        By continuing, I agree to the{" "}
        <a href="https://www.myntra.com/termsofuse" target={"_blank"}>
          <span style={{ color: "red" }}>Terms of Use</span>
        </a>{" "}
        &{" "}
        <a href="https://www.myntra.com/privacypolicy" target={"_blank"}>
          <span style={{ color: "red" }}>Privacy Policy</span>
        </a>
      </Text>
      <Stack>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.700",
          }}
          onClick={HandleContinueOnClick}
          disabled={ContinueBtn}
        >
          CONTINUE
        </Button>
      </Stack>
    </>
  );
}

const VerifyToAdmin = () => {
  const toast = useToast();
  const [PinOne, setPinOne] = useState("");
  const [PinTwo, setPinTwo] = useState("");
  const [PinThree, setPinThree] = useState("");
  const [PinFour, setPinFour] = useState("");
 

  const HandleVerify = () => {
    const arr = [PinOne, PinTwo, PinThree, PinFour];
    if (arr.join("") == "2022") {
      toast({
        title: "Welcome Back Admin",
        description: "wait few Seconds You will redirect to AdminPage",
        status: "success",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
      });
      setTimeout(() => {
        localStorage.setItem("AdminPage", true);
        window.location.reload()
      }, 5000);
    } else {
      toast({
        title: "invalid Pin",
        description: "You need to fill the Correct Seceret Code",
        status: "warning",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "bottom",
      });
    }
  };

  return (
    <Stack>
      <Center>
        <Heading as="p" fontSize={"18px"} fontFamily="sans-serif">
          You need to fill Secert Code
        </Heading>
      </Center>
      <FormControl>
        <Center>
          <HStack>
            <PinInput>
              <PinInputField
                onChange={(e) => setPinOne(e.target.value)}
                value={PinOne}
              />
              <PinInputField
                onChange={(e) => setPinTwo(e.target.value)}
                value={PinTwo}
              />
              <PinInputField
                onChange={(e) => setPinThree(e.target.value)}
                value={PinThree}
              />
              <PinInputField
                onChange={(e) => setPinFour(e.target.value)}
                value={PinFour}
              />
            </PinInput>
          </HStack>
        </Center>
      </FormControl>
      <Stack>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.700",
          }}
          onClick={HandleVerify}
        >
          Verify
        </Button>
      </Stack>
    </Stack>
  );
};

export default function PhoneVerifyPhone() {
  const toast = useToast();
  const [change, setChange] = useState(false);
  const [adminPage, setadminPage] = useState(false);
  const [ContinueBtn, SetCountinueBtn] = useState(false);
  const [Count, SetCount] = useState(30);

  const adminAndCountinueBtn = () => {
    setadminPage(false);
    SetCountinueBtn(false);
    window.location.reload();
  };

  const HandleSetNumber = (UserNumber) => {
    if (UserNumber.length == 10) {
      if (UserNumber === "9572365331") {
        setadminPage(true);
        SetCountinueBtn(true);
        setInterval(() => {
          SetCount((pre) => (pre > 0 ? pre - 1 : adminAndCountinueBtn()));
        }, 1000);
      } else {
        console.log("another number");
        setChange(true)
      }
    } else {
      toast({
        title: "invalid mobile number",
        description: "You need to fill 10 digit mobile number",
        status: "warning",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
        position: "bottom",
      });
    }
  };
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
          base: "150px",
          sm: "200px",
          md: "550px",
          lg: "130px",
          xl: "100px",
        }}
      >
        <img
          src="https://i.ibb.co/WsvGqWS/74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-MYNTRA500.jpg"
          alt="74786f11-eb3b-4677-9069-bb2e880263f91670575018339-offer-banner-500-600x240-code-MYNTRA500"
          border="0"
        ></img>
        <Flex p={6} flexDirection="column" gap={5} paddingBottom="100px">
          {change ? (
            <VerifyPhoneForm />
          ) : (
            <PhoneNumberInput
              HandleSetNumber={HandleSetNumber}
              ContinueBtn={ContinueBtn}
            />
          )}
          {adminPage && <VerifyToAdmin />}
          {adminPage && (
            <Center>
              <Heading fontSize={"sm"} color="red">
                This Secret Page will Close in {Count} Seconds and The Page will
                refresh again
              </Heading>
            </Center>
          )}
          <Stack>
            <Text
              color="gray.500"
              cursor={"pointer"}
              onClick={() => setChange(!change)}
            >
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
