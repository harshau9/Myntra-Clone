import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";
import MyntraLogo from "../pages/myn.png";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const Links = ["Men", "Women", "Kids", "Home & Living", "BEAUTY", "Studio"];

const NavLink = ({ children }) => (
  <Box
    fontFamily={"sans-serif"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      cursor: "pointer",
    }}
    fontSize="md"
    fontWeight={500}
    textTransform="uppercase"
  >
    {children}
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          px="10"
        >
          <IconButton
            size={"md"}
            width="20"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex gap="5" alignItems={"center"} border="0px solid red">
            <Link to="/">
              <Image src={MyntraLogo} alt="MyntraLogo" width="16" height="" />
            </Link>
            <Box display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <Link
                  to={
                    link === "Men"
                      ? "/men"
                      : link === "Women"
                      ? "/women"
                      : link === "Kids"
                      ? "/kids"
                      : link === "Home & Living"
                      ? "/hotel"
                      : link === "Studio"
                      ? "/ProductPage"
                      : link === "BEAUTY"
                      ? "/beauty"
                      : undefined
                  }
                >
                  {" "}
                  <NavLink key={link}>{link}</NavLink>
                </Link>
              ))}
            </Box>
          </Flex>

          <Flex
            border="0px solid red"
            gap={"2"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Link to="/bag">
              <Flex flexDirection={"column"} gap={1} alignItems={"center"}>
                <HiOutlineShoppingBag size={25} />
                <Heading as={"p"} fontSize="x-small">
                  BAG
                </Heading>
              </Flex>
            </Link>

            <Link to="/signup">
              <Flex flexDirection={"column"} gap={1} alignItems={"center"}>
                <FaRegUser size={25} color="black" />
                <Heading as={"p"} fontSize="x-small">
                  PROFILE
                </Heading>
              </Flex>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              {Links.map((link) => (
                <Link
                  to={
                    link === "Men"
                      ? "/men"
                      : link === "Women"
                      ? "/women"
                      : link === "Kids"
                      ? "/kids"
                      : link === "Home & Living"
                      ? "/hotel"
                      : link === "Studio"
                      ? "/ProductPage"
                      : link === "BEAUTY"
                      ? "/beauty"
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