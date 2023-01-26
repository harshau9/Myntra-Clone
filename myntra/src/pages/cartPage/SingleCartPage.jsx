import { Box, Button, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const SingleCartPage = () => {


    const navigate = useNavigate();

    useEffect(() => {
     
    }, [])

  return (
    <div>
     
     <Center mt="8rem">
     <SimpleGrid  columns={2} spacing={10} h="25rem" >
        <Box>
          <Button  display={"flex"} colorScheme="teal"onClick={()=> navigate("/bag/cart")}>
            Room Cart Page
          </Button>
        </Box>
        <Box>
          <Button  colorScheme="teal"  onClick={()=> navigate("/bag/product")}>
            Product Cart Page
          </Button>
        </Box>
      </SimpleGrid>
     </Center>
   
    </div>
  );
};
