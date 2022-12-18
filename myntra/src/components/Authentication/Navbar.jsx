import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import { Link } from "react-router-dom";
import Myntralogo from "../../components/Navbar/NavFolder/myn.png";

const navLI = ["Men", "Women", "kids", "Home Living", "Studio"];

const NavLink = ({ children }) => (
  <Box
    fontFamily={"sans-serif"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      color: "red",
    }}
    fontSize="sm"
    fontWeight={500}
    href={"#"}
    textTransform="uppercase"
  >
    {children}
  </Box>
);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <>
      <Box
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px"
        box
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={"center"}>
            <Box marginLeft={"50px"}>
              <Link to={"/"}>
                <Image src={Myntralogo} width={16} p="1.5" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navLI.map((link) => (
                <Link
                  to={
                    link == "Men"
                      ? "/men"
                      : link == "Women"
                      ? "/women"
                      : link == "kids"
                      ? "/kids"
                      : link == "Home Living"
                      ? "/hotel"
                      : link == "Studio"
                      ? "/ProductPage"
                      : undefined
                  }
                >
                  {" "}
                  <NavLink key={link}>{link}</NavLink>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={{ lg: "3rem" }}>
            <Box display={{ base: "none", xl: "flex", lg: "flex" }}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Search for products"
                  width={{ lg: "200px", "2xl": "500px" }}
                />
              </InputGroup>
            </Box>
            <Flex gap={"1rem"} paddingX="10px" marginRight={{ lg: "50px" }}>
              {/* <Box>
                <IoIosHeartEmpty size={21} />
                <Heading as={"p"} fontSize="10px">
                  WISHLIST
                </Heading>
              </Box> */}
              <Link to={"/bag"}>
                <Box>
                  <HiOutlineShoppingBag size={21} />
                  <Heading as={"p"} fontSize="10px">
                    BAG
                  </Heading>
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              alignContent="center"
              alignItems={"center"}
            >
              {navLI.map((link) => (
                <Link
                  to={
                    link == "Men"
                      ? "/men"
                      : link == "Women"
                      ? "/women"
                      : link == "kids"
                      ? "/kids"
                      : link == "Home Living"
                      ? "/hotel"
                      : link == "Studio"
                      ? "/ProductPage"
                      : undefined
                  }
                >
                  {" "}
                  <NavLink key={link}>{link}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
