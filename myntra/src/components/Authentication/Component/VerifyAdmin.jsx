import {
  Button,
  Heading,
  Stack,
  FormControl,
  HStack,
  Center,
  useToast,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import React, { useState } from "react";

const VerifyAdmin = () => {
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
        window.location.reload();
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
            <PinInput otp mask>
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

export default VerifyAdmin;
