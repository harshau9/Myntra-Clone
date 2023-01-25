import {
  Button,
  Center,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";

const DeleteRequest = async (id) => {
  try {
    let response = await axios.delete(
      `https://mock-server-trz7.onrender.com/User-Data/${id}`
    );

    return response;
  } catch (err) {
    return err;
  }
};

const TableComponent = (data) => {
  const toast = useToast();
  const [update, setUpdate] = useState(false);

  useEffect(() => {}, [update]);

  return (
    <TableContainer px={"10"}>
      {update ? (
        <Center>
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Center>
      ) : (
        <Table variant="striped" colorScheme="teal">
          <TableCaption>
            MYNT Shop Database <br />
            <span style={{ color: "red" }}>Created By Saurav Kumar</span>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>S.no</Th>
              <Th>PhoneNumber</Th>
              <Th>FirstName</Th>
              <Th>LastName</Th>
              <Th>Email</Th>
              <Th isNumeric>Password</Th>
              <Th isNumeric>Cart items</Th>
              <Th isNumeric>Wishlist itmes</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length === 0 && (
              <Center>
                <Heading as={"h2"}>Server has no data</Heading>
              </Center>
            )}
            {data.map(
              ({
                id,
                PhoneNumber,
                FirstName,
                LastName,
                Email,
                Password,
                CartPage,
                Wishlist,
              }) => {
                return (
                  <Tr>
                    <Td>{id}</Td>
                    <Td>{PhoneNumber}</Td>
                    <Td>{FirstName}</Td>
                    <Td>{LastName}</Td>
                    <Td>{Email}</Td>
                    <Td>{Password}</Td>
                    <Td isNumeric>{CartPage.length}</Td>
                    <Td isNumeric>{Wishlist.length}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          DeleteRequest(id)
                            .then((response) => {
                              toast({
                                title: "Delete User Successfully",
                                status: "success",
                                duration: 5000,
                                isClosable: true,
                                position: "top",
                              });
                              setUpdate(true);

                              setTimeout(() => {
                                setUpdate(false);
                              }, 3000);
                            })
                            .catch((reject) => {
                              toast({
                                title: "Something Went Wrong",
                                description: `${reject.message}`,
                                status: "error",
                                duration: 5000,
                                isClosable: true,
                                position: "bottom-right",
                              });
                            });
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default TableComponent;
