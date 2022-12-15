import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import VerifyPhoneNumber from "./Component/VerifyPhoneNumber";
import VerifyAdmin from "./Component/VerifyAdmin";
import PhoneNumberInput from "./Component/PhoneNumberInput";

export default function LoginPage() {
  const toast = useToast();
  const [changeComponent, setchangeComponent] = useState(false);
  const [adminPage, setadminPage] = useState(false);
  const [ContinueBtn, SetCountinueBtn] = useState(false);
  const [Count, SetCount] = useState(30);
  const [num, setNum] = useState("");

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
        setchangeComponent(true);
        setNum(UserNumber);
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
          {changeComponent ? (
            <VerifyPhoneNumber UserNumber={num} />
          ) : (
            <PhoneNumberInput
              HandleSetNumber={HandleSetNumber}
              ContinueBtn={ContinueBtn}
            />
          )}
          {adminPage && <VerifyAdmin />}
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
              onClick={() => setchangeComponent(!changeComponent)}
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
