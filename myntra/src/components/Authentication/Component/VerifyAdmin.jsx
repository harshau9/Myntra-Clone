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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const VerifyAdmin = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [PinOne, setPinOne] = useState("");
  const [PinTwo, setPinTwo] = useState("");
  const [PinThree, setPinThree] = useState("");
  const [PinFour, setPinFour] = useState("");
  const [btn, setBtn] = useState(false);
  const [loading, setloading] = useState(false);

  const PatchAdmin = async () => {
    setloading(true);
    try {
      await axios
        .patch("https://mock-server-trz7.onrender.com/Admin", {
          id: "Admin Page",
          isAuth: true,
        })
        .then(() => {
          setloading(false);
          toast({
            title: "Admin Page",
            description: "Welcome to the Admin Page",
            status: "success",
            duration: 3000,
            isClosable: true,
            variant: "top-accent",
            position: "top",
          });
          setBtn(false);
          navigate("/AdminPage");
        });
    } catch (err) {
      toast({
        title: "Something Went Wrong",
        description: `${err.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
      });
    }
  };
  const HandleVerify = () => {
    const arr = [PinOne, PinTwo, PinThree, PinFour];
    if (arr.join("") === "2022") {
      setBtn(true);
      PatchAdmin();
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
        {loading ? (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        ):
          <HStack display={!loading&&"hidden"}>
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
        }
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
          disabled={btn}
        >
          Verify
        </Button>
      </Stack>
      <Stack>
        
      </Stack>
    </Stack>
  );
};

export default VerifyAdmin;
