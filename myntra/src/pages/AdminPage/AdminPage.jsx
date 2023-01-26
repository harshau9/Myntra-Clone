import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import getData from "../../Redux/UserData/action";

import { Blocks } from "react-loader-spinner";
import TableComponent from "./Component/Table";
import { useDispatch, useSelector } from "react-redux";
const AdminPage = () => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, loading, error, isAdminAuthenticated } = useSelector(
    (store) => store.dataReducer
  );

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (error) {
    return <Navigate to="/error" replace={true} />;
  }
  return (
    <>
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
      <Flex justifyContent="center" gap="5" marginTop="5">
        <Box onClick={() => setChange(false)} cursor="pointer">
          UserData
        </Box>
        <Box onClick={() => setChange(true)} cursor="pointer">
          Home & Hotel
        </Box>
        {isAdminAuthenticated && (
          <Button
            width="20"
            bg={"red.500"}
            color={"white"}
            _hover={{
              bg: "red.500",
            }}
            onClick={() => {
              dispatch({ type: "logout" });
              dispatch({ type: "initialValue" });
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
      </Flex>
      <Flex mt="10">
        {change === false
          ? TableComponent(userData)
          : navigate("/AdminPage/AddHotel")}
      </Flex>
    </>
  );
};

export default AdminPage;
