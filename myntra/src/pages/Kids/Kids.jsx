import { Alert, AlertIcon, Spinner, Box, Image, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';

const Kids = () => {
  const [childData, setChildData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      setError(false);
      let res = await fetch(`https://myntra-database-lt5b7yjpx-aloki9singh.vercel.app/clothing?category=Child&_limit=35`);
      res = await res.json();
      setChildData(res);
      console.log(res)
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);
    }
  }
  return (
    <div>
      {error && <Alert w={"400px"} m={"auto"} status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>}
      {loading && <Spinner color='red.500' />}

      <Heading m={"10px 0"} textAlign="center">FASHION & ESSENTIALS</Heading>
      <Box display={"grid"} gridTemplateColumns={{ base: "repeat(5, 1fr)", sm: "repeat(3, 1fr)", lg: "repeat(5, 1fr)", xl: "repeat(5, 1fr)" }} gap="10px">
        {childData && childData.map((ele, index) =>
          <Box key={index} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" padding='10px'>
            <Image src={ele.images} alt=''></Image>
            <Text textAlign={"center"}>Category: {ele.category}</Text>
            <Text textAlign={"center"} fontFamily={"cursive"} fontSize={{ base: "22px", sm: "18px", lg: "22px", xl: "22px" }}>{ele.title}</Text>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Text color={"green"}>Discount: ₹{ele.discounted_price}</Text>
              <Text color={"goldenrod"}>Original Price: ₹{ele.strike_price}</Text>
            </Box>
            <Text fontSize={{ base: "23px", sm: "18px", lg: "23px", xl: "23px" }} textAlign={"center"} fontFamily={"cursive"} color="blue.700">{ele.discount}</Text>
            {/* <Text fontSize={"12px"} >Size: {ele.size}</Text> */}
            <Text textAlign={"center"} color={"yellow.300"}>Rating: {`${ele.rating} ---> ${ele.rating_count}`}</Text>
          </Box>
        )}
      </Box>
      <Footer />
    </div>
  );
}

export default Kids;