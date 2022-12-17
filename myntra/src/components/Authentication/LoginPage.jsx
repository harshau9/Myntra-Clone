import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import VerifyPhoneNumber from "./Component/VerifyPhoneNumber";
import VerifyAdmin from "./Component/VerifyAdmin";
import PhoneNumberInput from "./Component/PhoneNumberInput";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate, Link } from "react-router-dom";
import { Blocks, Watch } from "react-loader-spinner";

export const GetUserData = async () => {
  let response = await axios.get(
    `https://mock-server-trz7.onrender.com/User-Data`
  );

  return response.data;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const toast = useToast();
  const [changeComponent, setchangeComponent] = useState(false);
  const [adminPage, setadminPage] = useState(false);
  const [ContinueBtn, SetCountinueBtn] = useState(false);
  const [Count, SetCount] = useState(30);
  const [num, setNum] = useState("");
  const [id, setId] = useState("");
  const [otherNumber, setOtherNumber] = useState(false);

  let flag;
  let name;
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
        data.map((item) => {
          if (item.PhoneNumber === UserNumber) {
            flag = true;
            name = `${item.FirstName} ${item.LastName}`;
            setId(item.id);
          }
        });
        if (flag) {
          toast({
            title: `Welcome Back ${name}`,
            status: "success",
            duration: 3000,
            isClosable: true,
            variant: "left-accent",
            position: "top",
          });
          setNum(UserNumber);
          setchangeComponent(true);
        }
        if (!flag) {
          setOtherNumber(true);
          setTimeout(() => {
            toast({
              title: `You Need to Signup`,
              description: "after few seconds You will redirect to signup Page",
              status: "warning",
              duration: 3000,
              isClosable: true,
              variant: "left-accent",
              position: "top",
            });
            navigate("/signup");
          }, 3000);
        }
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

  useEffect(() => {
    setLoading(true);
    GetUserData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong",
          description: `${err.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
      });
  }, []);

  return (
    <>
      {<Navbar />}
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
            {otherNumber && (
              <Center>
                <Watch
                  height="80"
                  width="80"
                  radius="48"
                  color="#4fa94d"
                  ariaLabel="watch-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </Center>
            )}
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
            ) : changeComponent ? (
              <VerifyPhoneNumber UserNumber={num} id={id} />
            ) : (
              <PhoneNumberInput
                HandleSetNumber={HandleSetNumber}
                ContinueBtn={ContinueBtn}
                flag={flag}
              />
            )}
            {adminPage && <VerifyAdmin />}
            {adminPage && (
              <Center>
                <Heading fontSize={"sm"} color="red">
                  This Secret Page will Close in {Count} Seconds and The Page
                  will refresh again
                </Heading>
              </Center>
            )}
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
    </>
  );
}
