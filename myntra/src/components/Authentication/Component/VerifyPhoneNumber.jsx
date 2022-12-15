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

function VerfiyPhoneNumber({ UserNumber }) {
  const toast = useToast();
  const [Pin1, setPin1] = useState("");
  const [Pin2, setPin2] = useState("");
  const [Pin3, setPin3] = useState("");
  const [Pin4, setPin4] = useState("");
  const [Pin5, setPin5] = useState("");
  const [Pin6, setPin6] = useState("");

  const HandleVerfiyButton = () => {
    const mobilenumber = [Pin1, Pin2, Pin3, Pin4, Pin5, Pin6];

    const otp = mobilenumber.join("");

    const number = [
      UserNumber[0],
      UserNumber[1],
      UserNumber[2],
      UserNumber[3],
      UserNumber[4],
      UserNumber[5],
    ];

    const userNumber = number.join("");

    if (otp == userNumber) {
      toast({
        title: "SuccessFully Verified",
        description: "Welcome to Mynta",
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
      });
    } else {
      toast({
        title: "invalid otp",
        description: "Please Enter Correct Otp",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
      });
    }
  };
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
        {UserNumber}
      </Center>
      <FormControl>
        <Center>
          <HStack>
            <PinInput mask otp>
              <PinInputField
                required
                onChange={(e) => setPin1(e.target.value)}
                value={Pin1}
              />
              <PinInputField
                required
                onChange={(e) => setPin2(e.target.value)}
                value={Pin2}
              />
              <PinInputField
                required
                onChange={(e) => setPin3(e.target.value)}
                value={Pin3}
              />
              <PinInputField
                required
                onChange={(e) => setPin4(e.target.value)}
                value={Pin4}
              />
              <PinInputField
                required
                onChange={(e) => setPin5(e.target.value)}
                value={Pin5}
              />
              <PinInputField
                required
                onChange={(e) => setPin6(e.target.value)}
                value={Pin6}
              />
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
          onClick={HandleVerfiyButton}
        >
          Verify
        </Button>
      </Stack>
    </Stack>
  );
}

export default VerfiyPhoneNumber;
