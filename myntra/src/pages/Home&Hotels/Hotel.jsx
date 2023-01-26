import { Select, Flex, Heading, Box, Image, Button, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getProduct, sortData, getData } from "../../Redux/homeHotel/actions";
import { Spinner } from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";
import hotel_base_url from '../../Redux/homeHotel/home&Hotel';


let totalPages = 3;
let arr = [];
export default function Hotel() {
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);
  const [limit, setLimit] = useState(3);
  const dispatch = useDispatch();
  const { error, loading, rooms } = useSelector((store) => store.Reducer);
  const navigate = useNavigate();
  const toast = useToast();
  const { currentUserData, isAuth } = useSelector((store) => store.dataReducer);
  const { id } = currentUserData;

  useEffect(() => {
    dispatch(getProduct(page, limit));
  }, [page, limit]);

  const handlePage = (val) => {
    let value = val + page;
    setPage(value);
  };

  async function filterRoom(e) {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 200);
    let value = e.target.value;
    if (value === "") {
      let res = await fetch(`${hotel_base_url}`);
      res = await res.json().then((res) => dispatch(getData(res)));
    } else {
      let res = await fetch(`${hotel_base_url}?category=${value}`);
      res = await res.json().then((res) => dispatch(filterData(res)));
    }
  };

  function sortRoom(e) {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 300);
    let sortBy = e.target.value;
    let sortedData = [...rooms];
    if (sortBy === "asc") {
      sortedData.sort((a, b) => {
        return a.cost - b.cost;
      });
    }
    if (sortBy === "desc") {
      sortedData.sort((a, b) => {
        return b.cost - a.cost;
      });
    }
    dispatch(sortData(sortedData));
  };

  const postUserCartData = async (data) => {
    try {
      const res = await axios.put(`https://mock-server-trz7.onrender.com/User-Data/${id}`, data)
      return await res.data;
    } catch (e) {
      toast({
        title: 'Something went wrong',
        description: `${e.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  };

  /*Add to Cart Functions */
  const handleAddToCart = (el) => {
    arr.push(el);
    if (isAuth === true) {
      postUserCartData({ CartPageRoom: arr }).then((res) => {
        toast({
          title: 'Successfully',
          description: "Product added successfully",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }).catch((err) => {
        toast({
          title: 'Something went wrong',
          description: `${err.message}`,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      })
    } else {
      navigate("/login");
    }
  };

  return (
    <>

      <Box mt="5%">
        {error && <Alert w={"400px"} m={"auto"} status='error'>
          <AlertIcon />
          There was an error processing your request
        </Alert>}

        <Flex w={"100vw"} flexDirection={"column"}>
          <Flex alignItems="center" justifyContent="center" w={"100%"} m={"1rem 0"}>
            <Select
              width="300px"
              mr="2rem"
              onChange={filterRoom}
            >
              <option value={""}>Filter by category</option>
              <option value="family">Family</option>
              <option value="duluxe">Duluxe</option>
              <option value="suit">Suit</option>
            </Select>

            {loading && flag && <Spinner color='red.500' />}

            <Select width="300px" onChange={sortRoom}>
              <option value="asc">Sort by price</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </Select>
          </Flex>

          <Container mt={"1%"} mb="1%">
            <Box display={"flex"} justifyContent="space-between" color={"green"} gap="5px">
              <Button bg={"teal"} color="black" variant={"outline"} onClick={() => setPage(1)}>First</Button>
              <Button bg={"teal"} color="black" variant={"outline"} disabled={page <= 1} onClick={() => handlePage(-1)}>PREV</Button>
              <Button color="red" fontSize={"23px"} variant={"outline"} border={"2px solid blue"} w="10px" disabled>{page}</Button>
              <Button bg={"teal"} color="black" variant={"outline"} disabled={page === totalPages} onClick={() => handlePage(1)}>NEXT</Button>
              <Button bg={"teal"} color="black" variant={"outline"} onClick={() => setPage(totalPages)}>Last</Button>
              <Select w="100px" onChange={(e) => setLimit(e.target.value)}>
                <option value={3}>3</option>
                <option vlaue={6}>6</option>
                <option value={9}>9</option>
              </Select>
            </Box>
          </Container>

          <Box display={"grid"} gridTemplateColumns={{ base: "repeat(3,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }} textAlign="center">
            {rooms && rooms.map((el) => {
              return (
                <Box
                  boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                  m={"1rem"}
                  key={el.id}
                >
                  <Image
                    src={el.image_url}
                    alt="room"
                    w={"100%"}
                    h={"300px"}
                  ></Image>
                  <Box>
                    <Heading m={"1rem 0"} size={"md"}>
                      {el.category.toUpperCase()} ROOM
                    </Heading>
                    <p>Type of Room : {el.type_of_room}</p>
                    <p>Bed : {el.bed_type}</p>
                    <p>No. of Adults : {el.no_of_persons || 4}</p>
                    <p>Capacity : {el.capacity}</p>
                    <p style={{ color: "green" }}>Cost : ₹{el.cost}</p>
                    <Button variant="solid" colorScheme={"teal"} m={"1rem 0"} w="100px" onClick={() => handleAddToCart(el)}>
                      Book Now
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </>
  );
}