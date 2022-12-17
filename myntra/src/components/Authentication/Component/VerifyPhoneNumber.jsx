import {
  Button,
  Heading,
  Stack,
  FormControl,
  HStack,
  Center,
  useToast,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { GetUserData } from "../LoginPage";

function VerfiyPhoneNumber({ UserNumber, id }) {
  const [data, setData] = useState([]);
  const [btn, setbtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [PatchUserloading, setPathUserLoading] = useState(false);
  let flag;

  const PatchUser = async () => {
    setPathUserLoading(true);
    try {
      await axios
        .patch("https://mock-server-trz7.onrender.com/User", {
          id: id,
          isAuth: true,
        })
        .then((res) => {
          toast({
            title: "Login SuccessFully",
            description: "Welcome to Mynta",
            status: "success",
            duration: 4000,
            isClosable: true,
            variant: "top-accent",
            position: "top",
          });
          setTimeout(() => {
            navigate("/");
          }, 3000);
          setPathUserLoading(false);
        });
    } catch (err) {
      setPathUserLoading(true);
      toast({
        title: "Something went wrong",
        description: `${err.message}`,
        status: "error",
        duration: 4000,
        isClosable: true,
        variant: "top-accent",
        position: "top",
      });
    }
  };

  const HandleVerfiyButton = () => {
    data.map((item) => {
      if (item.Password === Password) {
        flag = true;
      }
    });
    setbtn(true);
    if (flag) {
      PatchUser();
    }
    if (!flag) {
      setbtn(false);
      toast({
        title: `Incorrect Password`,
        status: "warning",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
        position: "top",
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
          duration: 4000,
          isClosable: true,
          position: "bottom-right",
        });
      });
  }, []);
  return (
    <Stack spacing={4}>
      <Center>
        <Heading lineHeight={1.1} fontSize="xl">
          Verify your Phone Number
        </Heading>
      </Center>
      <Center fontSize={{ base: "sm", sm: "md" }}>
        Please Enter Your Password
      </Center>
      {loading && (
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
      )}

      <Center fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
        {UserNumber}
      </Center>
      {PatchUserloading ? (
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
      ) : (
        <FormControl>
          <Center>
            <HStack>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </HStack>
          </Center>
        </FormControl>
      )}
      <Stack spacing={6}>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.700",
          }}
          disabled={btn}
          onClick={HandleVerfiyButton}
        >
          Verify
        </Button>
      </Stack>
    </Stack>
  );
}

export default VerfiyPhoneNumber;
