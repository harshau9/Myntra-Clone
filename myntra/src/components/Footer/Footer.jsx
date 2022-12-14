import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import Apple from "./appleplay.png";
import Google from "./googleplay.png";
import original from "./original.png";
import returnh from "./returnh.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <div
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      className="footer"
    >
      <Container
        as={HStack}
        display={"flex"}
        justifyContent={"space-between"}
     
        alignContent={"flex-start"}
        maxW={"6xl"}
        py={10}
        
      >
        <Box width={"50%"} >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={2}>
            <Stack align={"flex-start"}>
              <Text className="footertext">ONLINE&nbsp;SHOPPING</Text>
              <Text className="fontmin">Men</Text>
              <Text className="fontmin">Women</Text>
              <Text className="fontmin">Kids</Text>
              <Text className="fontmin">Home & Living</Text>
              <Text className="fontmin">Gift Cards</Text>
              <Text className="fontmin">Myntra Insider</Text>

              <Text className="footertext">USEFUL LINKS</Text>
              <Text className="fontmin">Blog</Text>
              <Text className="fontmin">Careers</Text>
              <Text className="fontmin">Site Map</Text>
              <Text className="fontmin">Corporate Information</Text>
              <Text className="fontmin">Whitehat</Text>
            </Stack>

            <Stack align={"flex-start"}>
              <Text className="footertext">CUSTOMER POLICIES</Text>
              <Text className="fontmin">Contact Us</Text>
              <Text className="fontmin">FAQ</Text>
              <Text className="fontmin">T&C</Text>
              <Text className="fontmin">Terms Of Use</Text>
              <Text className="fontmin">Track Orders</Text>
              <Text className="fontmin">Shipping</Text>
              <Text className="fontmin">Cancellation</Text>
              <Text className="fontmin">Returns</Text>
              <Text className="fontmin">Privacy Policy</Text>
              <Text className="fontmin">Grievance Officer</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <Text className="footertext">EXPERIENCE APP ON MOBILE</Text>
              <Link className="storef">
                {" "}
                <img width={"120px"} src={Apple} alt="" />
                <img width={"120px"} src={Google} alt="" />
              </Link>
              <Text className="footertext">KEEP IN TOUCH</Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Box>
        <Box h={"50vh"}>
          <Stack>
            <HStack>
              <img src={original} alt="" className="i2f" />
              <div className="col-span-5">
                <b>100% ORIGINAL</b> <span className="fontor">guarantee</span>
                <br />
                <Text className="fontor"> for all products at myntra.com</Text>
              </div>
            </HStack>
            <HStack>
              <img src={returnh} alt="" className="i3f" />
              <div className="col-span-5">
                <b>Return within 30days</b> <span className="fontor">of</span>
                <br />
                <Text className="fontor">receiving your order</Text>
              </div>
            </HStack>
          </Stack>
        </Box>
      </Container>

      <Container display={"flex"} maxW={"6xl"}>
        {" "}
        <Text className="footertext" w={"150px"} display={"flex"}>
          POPULAR SEARCHES
        </Text>
        <Box
          // width={"75%"}
          m={"auto"}
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          pb={3}
        ></Box>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        ></Box>
      </Container>
      <Container
         maxW={"6xl"}
        color={useColorModeValue("gray.500", "gray.700")}
        className="fontmin"
      >
        Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
        | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
        Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
        Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
        Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
        Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
        Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
        Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
        | Designers Sarees
      </Container>

      <Box>
        <Container
          as={HStack}
          display={"flex"}
          justifyContent={"space-between"}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text color={"gray.500"}>
            In case of any concern,
            <span style={{ color: "blue" }}> Contact Us</span>{" "}
          </Text>
          <Text color={"gray.500"}>
            © 2022 www.myntra.com All rights reserved
          </Text>
        </Container>
      </Box>
    </div>
  );
}
