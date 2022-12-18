import { useEffect, useState } from "react";
import Update from "../../pages/Home&Hotels/Update";
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
  useToast,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GetUserData } from "../Authentication/LoginPage";
import { Blocks } from "react-loader-spinner";
import TableComponent from "./Component/Table";
import Myntralogo from "../../components/Navbar/NavFolder/myn.png";
const navLI = ["Men", "Women", "kids", "Home Living", "Studio"];

const PostRequest = async () => {
  try {
    let response = await axios.patch(
      `https://mock-server-trz7.onrender.com/Admin`,
      {
        id: "Admin Page",
        isAuth: false,
      }
    );

    return await response.data;
  } catch (err) {
    return err;
  }
};

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

function AdminNavbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [Page, setPage] = useState("Home");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const toast = useToast();
  const HandleSignout = () => {
    PostRequest()
      .then((res) => {
        toast({
          title: "Logout Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
  }, [toast]);

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
                <Image src={Myntralogo} width={20} p="1.5" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {navLI.map((link) => (
                <Box onClick={() => setPage(link)}>
                  <NavLink key={link}>{link}</NavLink>
                </Box>
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

            <Flex alignItems={"center"} paddingX="20px">
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"md"}
                      src={
                        "https://media.licdn.com/dms/image/D4D03AQGpp6MY_-YX6Q/profile-displayphoto-shrink_400_400/0/1670064318301?e=1676505600&v=beta&t=kbFRH7WHw6SE-vJwmWNqcA2VlLAeV8KAjuVMM_pG5X8"
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://media.licdn.com/dms/image/D4D03AQGpp6MY_-YX6Q/profile-displayphoto-shrink_400_400/0/1670064318301?e=1676505600&v=beta&t=kbFRH7WHw6SE-vJwmWNqcA2VlLAeV8KAjuVMM_pG5X8"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Saurav Kumar</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <a
                      href="https://mock-server-trz7.onrender.com/"
                      target={"_blank"}
                      rel="noopener"
                    >
                      <MenuItem>Your Servers</MenuItem>
                    </a>
                    <MenuItem onClick={HandleSignout}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
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
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
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
      {Page === navLI[3]
        ? navigate("/AdminPage/AddHotel")
        : TableComponent(data)}
    </>
  );
}

export default AdminNavbar;
