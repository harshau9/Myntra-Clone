import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  InputGroup,
  InputLeftAddon,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux"

import {Navigate} from 'react-router-dom'

import getData from "../../../Redux/UserData/action.js";

function PhoneNumberInput() {
  const dispatch = useDispatch();
  const toast = useToast();

  const { loading,error } = useSelector((store) => store.dataReducer);
  const { number } = useSelector((store) => store.loginReducer);

  const HandleButton = () => {
    if (number.length === 10) {
      dispatch({ type: "whoisHe", payload: number });
    } else {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a 10 digit phone number",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    dispatch(getData());
  }, []);

   if (error) {
     return <Navigate to="/error" replace={true} />;
   }
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
          value={number}
          onChange={(e) =>
            dispatch({ type: "number", payload: e.target.value })
          }
        />
      </InputGroup>
      <Text fontSize={{ base: "sm", sm: "md" }} color="gray.500">
        By continuing, I agree to the{" "}
        <a
          href="https://www.myntra.com/termsofuse"
          target={"_blank"}
          rel="noreferrer"
        >
          <span style={{ color: "red" }}>Terms of Use</span>
        </a>{" "}
        &{" "}
        <a
          href="https://www.myntra.com/privacypolicy"
          target={"_blank"}
          rel="noreferrer"
        >
          <span style={{ color: "red" }}>Privacy Policy</span>
        </a>
      </Text>
      <Stack>
        <Button
          isLoading={loading}
          loadingText="Loading..."
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.500",
          }}
          onClick={HandleButton}
        >
          CONTINUE
        </Button>
      </Stack>
    </>
  );
}

export default PhoneNumberInput;
