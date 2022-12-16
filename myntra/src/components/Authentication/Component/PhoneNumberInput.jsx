import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";

function PhoneNumberInput({ HandleSetNumber, ContinueBtn }) {
  const [num, setnum] = useState("");
  const HandleContinueOnClick = () => {
    HandleSetNumber(num);
  };

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
          onChange={(e) => setnum(e.target.value)}
          required
        />
      </InputGroup>
      <Text fontSize={{ base: "sm", sm: "md" }} color="gray.500">
        By continuing, I agree to the{" "}
        <a href="https://www.myntra.com/termsofuse" target={"_blank"}>
          <span style={{ color: "red" }}>Terms of Use</span>
        </a>{" "}
        &{" "}
        <a href="https://www.myntra.com/privacypolicy" target={"_blank"}>
          <span style={{ color: "red" }}>Privacy Policy</span>
        </a>
      </Text>
      <Stack>
        <Button
          bg={"red.500"}
          color={"white"}
          _hover={{
            bg: "red.700",
          }}
          onClick={HandleContinueOnClick}
          disabled={ContinueBtn}
        >
          CONTINUE
        </Button>
      </Stack>
    </>
  );
}

export default PhoneNumberInput;
