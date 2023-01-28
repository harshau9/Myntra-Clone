import {
  Button,
  Heading,
  Stack,
  FormControl,
  HStack,
  Center,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Blocks } from "react-loader-spinner";
import { BiArrowBack } from "react-icons/bi";
import getData from "../../../Redux/UserData/action.js";
import { Navigate, useNavigate } from "react-router-dom";

function VerfiyPhoneNumber() {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/login");
    dispatch({ type: "Back" });
    dispatch({ type: "initialValue" });
  };

  const { number } = useSelector((store) => store.loginReducer);
  const { loading, userData, error } = useSelector(
    (store) => store.dataReducer
  );
  const VerifyUser = () => {
    if (password) {
      const VerifyUser = userData.filter((el) => el.password === password);
      if (VerifyUser.length > 0) {
        dispatch({ type: "VerifedUser", payload: VerifyUser[0] });
        toast({
          title: "Login Successful",
          description: "You have successfully Logged in",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "Wrong Password",
          description: "Please enter correct password",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Please Enter Password",
        description: "Please enter password",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    dispatch(getData);
  }, []);

  if (error) {
    return <Navigate to="/error" replace={true} />;
  }

  return (
    <>
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
      ) : (
        <Stack spacing={4}>
          <Center>
            <Heading lineHeight={1.1} fontSize="xl">
              Verify your Phone Number
            </Heading>
          </Center>
          <Center fontSize={{ base: "sm", sm: "md" }}>
            Please Enter Your Password
          </Center>
          <Center gap="1" onClick={backButton} cursor="pointer">
            <BiArrowBack /> Back
          </Center>
          <Center fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            {number}
          </Center>
          <FormControl>
            <Center>
              <HStack>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
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
              onClick={VerifyUser}
            >
              Verify
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default VerfiyPhoneNumber;
