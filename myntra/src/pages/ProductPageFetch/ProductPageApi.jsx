import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import ApiFetchData from "./pages/ApiCall/ApiFetchData";
import { Apimintzone } from "./pages/ApiCall/ApiFetchData";

import { FilterBox } from "./pages/FilterBox/FilterBox";
import { ProductBox } from "./pages/ProductBox/ProductBox";

import { Spinner } from "@chakra-ui/react";

import { ProductSideFiter } from "./pages/ProductSideFilter/ProductSideFiter";
export const ProductPageApi = () => {
  const [data, setdata] = useState([]);
  const [Listmintdata, setListmintdata] = useState([]);

  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Apimintzone()
      .then((res) => {
        setLoading(false);
        setdata(res.data.clothing);
      })
      .catch((err) => console.log(err));

    setLoading(true);
    ApiFetchData()
      .then((res) => {
        setLoading(false);
        setListmintdata(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function Mens(DataOfId = "Mens") {
    const updata = data.filter(
      (ele) => ele.category === DataOfId && ele.images.length !== 0
    );
    setListmintdata(updata);
  }

  return (
    <Box width={"95%"} gap="10px" m={"auto"} bg="white">
      <Box p="10px" textAlign={"start"}>
        <Text color="black">Home/ Footware /Crocs</Text>
      </Box>
      <Box p="10px" textAlign={"start"} onClick={Mens}>
        <Text as="b" color="black">
          Crocs - {Listmintdata.length} items
        </Text>
      </Box>

      <Flex display={["none", "flex", "Flex"]}>
        <Box w="25%">
          <Flex p="10px">
            <Text color={"black"} as="b">
              FILTER
            </Text>
            <Spacer />
            <Text color="red">CLEAR ALL</Text>
          </Flex>
        </Box>
        <ProductSideFiter />
      </Flex>

      <Flex>
        <FilterBox Mens={Mens} />
        {Loading ? (
          <Box m="auto">
            {" "}
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        ) : (
          <ProductBox data={Listmintdata} />
        )}
      </Flex>
    </Box>
  );
};
