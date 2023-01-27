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
import React from "react";
import { useDispatch} from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyAdmin = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  

  const [PinOne, setPinOne] = useState("");
  const [PinTwo, setPinTwo] = useState("");
  const [PinThree, setPinThree] = useState("");
  const [PinFour, setPinFour] = useState("");

  const HandleVerify = () => {
    const arr = [PinOne, PinTwo, PinThree, PinFour];
    if (arr.join("") == process.env.REACT_APP_PASSWORD) {
      toast({
        title: "Admin Verification Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "bottom",
      });
      dispatch({ type: "Verified Admin" });
      navigate("/AdminPage");
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

  const backButton = () => {
    navigate("/login");
    dispatch({ type: "Back" });
    dispatch({ type: "initialValue" });
  };
  return (
    <Stack>
      <Center gap="1" onClick={backButton} cursor="pointer">
        <BiArrowBack /> Back
      </Center>
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
            bg: "red.500",
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
