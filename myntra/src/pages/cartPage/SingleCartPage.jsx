import MainNavbar from "../../components/Navbar/MainNavbar";
import Footer from "../../components/Footer/Footer";
import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const SingleCartPage = () => {


    const navigate = useNavigate();

  return (
    <div>
      <MainNavbar />
     <Center mt="8rem">
     <SimpleGrid  columns={2} spacing={10} h="25rem" w="50%">
        <Box>
          <Button  display={"flex"} colorScheme="teal" size="lg" onClick={()=> navigate("/bag/cart")}>
            Room Cart Page
          </Button>
        </Box>
        <Box>
          <Button  colorScheme="teal" size="lg" onClick={()=> navigate("/bag/product")}>
            Product Cart Page
          </Button>
        </Box>
      </SimpleGrid>
     </Center>
      <Footer />
    </div>
  );
};
