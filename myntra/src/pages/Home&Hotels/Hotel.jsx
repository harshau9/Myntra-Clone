import { Select, Flex, Heading, Box, Image, Button, Container, Alert, AlertIcon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getProduct, sortData, getData } from "./Redux/actions";
import { Spinner } from '@chakra-ui/react';
import Update from './Update';


let ProductArr = JSON.parse(localStorage.getItem("products")) || [];
let totalPages = 10;

export default function Hotel() {
  const [page, setPage] = useState(1);
  const [flag, setFlag] = useState(false);
  const [limit, setLimit] = useState(3);
  const dispatch = useDispatch();
  const { error, loading, rooms } = useSelector((store) => store.Reducer);

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
      let res = await fetch(`http://localhost:8080/rooms`);
      res = await res.json().then((res) => dispatch(getData(res)));
    } else {
      let res = await fetch(`http://localhost:8080/rooms?category=${value}`);
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

  /*Add to Cart Functions */
  const handleAddToCart = (el) => {
    ProductArr.push(el);
    alert("Product added successfully");
    localStorage.setItem("products", JSON.stringify(ProductArr));
  };

  return (
    <>
      <Update />

      <hr />

      {error && <Alert w={"400px"} m={"auto"} status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>}
      {loading && flag && <Spinner color='red.500' />}

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

          <Select width="300px" onChange={sortRoom}>
            <option value="asc">Sort by price</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </Flex>

        <Container mt={"1%"} mb="1%">
          <Box display={"flex"} justifyContent="space-between" color={"green"}>
            <Button onClick={() => setPage(1)}>First</Button>
            <Button disabled={page <= 1} onClick={() => handlePage(-1)}>PREV</Button>
            <Button color={"red"} border={"2px solid blue"} disabled>{page}</Button>
            <Button disabled={page === totalPages} onClick={() => handlePage(1)}>NEXT</Button>
            <Button onClick={() => setPage(totalPages)}>Last</Button>
            <Select w="100px" onChange={(e) => setLimit(e.target.value)}>
              <option value={3}>3</option>
              <option vlaue={6}>6</option>
              <option value={9}>9</option>
            </Select>
          </Box>
        </Container>

        <Box display={"grid"} gridTemplateColumns={{ base: "repeat(3,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)", xl: "repeat(3,1fr)" }}>
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
                  <Button variant="solid" colorScheme={"teal"} m={"1rem 0"} onClick={() => handleAddToCart(el)}>
                    Book Now
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Flex>
    </>
  );
}
