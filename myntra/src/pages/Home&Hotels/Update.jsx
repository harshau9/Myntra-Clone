import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Select,
  Button,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Spinner,
  Alert,
  AlertIcon,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addProduct, deleteProduct, getProduct, updateProduct } from "./Redux/actions";

const initialValue = {
  category: "",
  image_url: "",
  type_of_room: "",
  bed_type: "",
  no_of_persons: '',
  capacity: "",
  cost: "",
  booked: false,
}
export default function Update() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialValue);
  const { loading, error, rooms } = useSelector((store) => store.Reducer);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  
  /* For Admin Deshboard */
  // const email = "admin@gmail.com";
  // if (email !== "admin@gmail.com") {
  //   return;
  // }

  const handleChange = (e) => {
    let { value, id } = e.target;
    value = id === "cost" ? +(value) : value;
    setFormData({ ...formData, [id]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert(`New Product has been added`);
    dispatch(addProduct(formData));
    setFormData({
      category: "",
      image_url: "",
      type_of_room: "",
      bed_type: "",
      no_of_persons: '',
      capacity: "",
      cost: "",
      booked: '',
    });
  };

  const Handletoggle = (id, changes) => {
    console.log(id, changes);
    alert("Status has been changed");
    dispatch(updateProduct(id, { booked: changes }));
  };

  const HandleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
 const navigate = useNavigate()
  const { category, image_url, no_of_persons, type_of_room, bed_type, capacity, cost } = formData;

  return (
    <Box flexDirection={{ base: "row", sm: "column", lg: "row", xl: "row" }} display={"flex"} alignItems={"center"} justifyContent="space-evenly">
      {/* Admin Hotel Form */}
      <Flex alignItems="center" justifyContent="center">
        <FormControl boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={"2rem"}>
          <Heading color={'green.900'} m={15}>ADD ROOM</Heading>
          <FormLabel mt="10px">Choose Category</FormLabel>
          <Select placeholder="Choose Category" id="category" onChange={handleChange} value={category}>
            <option value="family">Family</option>
            <option value="duluxe">Duluxe</option>
            <option value="suit">Suit</option>
          </Select>

          <FormLabel mt="10px">Image of the room</FormLabel>
          <Input type="url" placeholder="Image URL" id="image_url" onChange={handleChange} value={image_url} />

          <FormLabel mt="10px">Type</FormLabel>
          <Select placeholder="Choose Room Type" id="type_of_room" onChange={handleChange} value={type_of_room}>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </Select>

          <FormLabel mt="10px">Bed Type</FormLabel>
          <Select placeholder="Choose Bed Type" id="bed_type" onChange={handleChange} value={bed_type}>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </Select>

          <FormLabel mt="10px">No. of Adults</FormLabel>
          <Input type="number" placeholder="00" id="no_of_persons" onChange={handleChange} value={no_of_persons} />

          <FormLabel mt="10px">Max Capacity</FormLabel>
          <Input type="number" placeholder="00" id="capacity" value={capacity} onChange={handleChange} />

          <FormLabel mt="10px">Cost per night</FormLabel>
          <Input type="number" placeholder="Rs. 999" id="cost" onChange={handleChange} value={cost} />

          <Button mt="15px" width="full" type="submit" colorScheme="blue" onClick={handleSubmit}>
            Add Room
          </Button>
          <FormHelperText>Enter Room Details...</FormHelperText>
        </FormControl>
      </Flex>



      <Flex flexDirection={"column"}>
        {loading && <Spinner color="red" />}
        {error === true && <Alert status='error'>
          <AlertIcon />
          There was an error processing your request
        </Alert>}
             <Center>
              <Button backgroundColor={'teal'} color='white' onClick={()=> navigate("/AdminPage")}>Back to AdminPage</Button>
             </Center>
        <Heading m={"2rem"} textAlign="center" color={'green.900'}>ADMIN DASHBOARD</Heading>
        <TableContainer
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          pt={"1rem"}
          m="auto"
          boxSize={{ base: "100%", sm: "65%", lg: "100%", xl: "100%" }}
        >
          <Table variant="striped">
            <TableCaption></TableCaption>
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Type of Room</Th>
                <Th>Bed Type</Th>
                <Th>Capacity</Th>
                <Th>Cost</Th>
                <Th>Status</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rooms && rooms.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td>{el.category}</Td>
                    <Td>{el.type_of_room}</Td>
                    <Td>{el.bed_type}</Td>
                    <Td>{el.capacity}</Td>
                    <Td>₹{el.cost}</Td>
                    <Td onClick={() => Handletoggle(el.id, !el.booked)}>{el.booked ? "Booked" : "Not Booked"}</Td>
                    <Td>
                      {<Button variant={"solid"}
                        colorScheme={"red"}
                        onClick={() => Handletoggle(el.id, !el.booked)}>Toggle</Button>}
                    </Td>
                    <Td>
                      <Button
                        variant={"solid"}
                        colorScheme={"red"}
                        onClick={() => {
                          HandleDelete(el.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
}
