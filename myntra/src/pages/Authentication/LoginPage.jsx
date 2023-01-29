import {
  Flex,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import VerifyAdmin from "./Component/VerifyAdmin";
import PhoneNumberInput from "./Component/PhoneNumberInput";
import axios from "axios";
import { Link } from "react-router-dom";
import VerfiyPhoneNumber from "./Component/VerifyPhoneNumber";
import { useSelector } from "react-redux";

export const GetUserData = async () => {
  let response = await axios.get(
    `https://mock-server-trz7.onrender.com/User-Data`
  );
  return response.data;
};

export default function LoginPage() {
  const { user, admin, needToSignup } = useSelector(
    (store) => store.dataReducer
  );
  const toast = useToast();

  
  if (needToSignup === true) {
    window.location.reload();
    toast({
      title: "You need to sign up",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      backgroundColor="#fdedf0"
      border={"none"}
    >
      <Stack
        marginTop='10'
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
          {user === false && admin === false && <PhoneNumberInput />}
          {user === true && admin === false && <VerfiyPhoneNumber />}
          {user === false && admin === true && <VerifyAdmin />}
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
              New User ?{" "}
              <Link to={"/Signup"}>
                <span style={{ color: "red" }}> Signup</span>
              </Link>
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
