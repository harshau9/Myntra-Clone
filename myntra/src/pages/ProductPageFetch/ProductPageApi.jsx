import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Apimintzone } from "./pages/ApiCall/ApiFetchData";

import { FilterBox } from "./pages/FilterBox/FilterBox";
import { ProductBox } from "./pages/ProductBox/ProductBox";

import { Spinner } from "@chakra-ui/react";

import { ProductSideFiter } from "./pages/ProductSideFilter/ProductSideFiter";

export const ProductPageApi = () => {
  const [data, setdata] = useState([]);
  const [Listmintdata, setListmintdata] = useState([]);
  const [Loading, setLoading] = useState(false);

  const [demo, setdemo] = useState([]);

  useEffect(() => {
    setLoading(true);
    Apimintzone()
      .then((res) => {
        setLoading(false);
        res = res.data.clothing;
        res = res.filter((ele) => ele.images.length > 2);
        setdata(res);
        let mens = res.filter((ele) => ele.category === "Mens");
        mens.length = 20
        setListmintdata(mens);
      })
      .catch((err) => console.log(err));
  }, []);

  function Mens(DataOfId = "Mens") {
    const updata = data.filter(
      (ele) => ele.category === DataOfId && ele.rating !== null
    );
    setListmintdata(updata);
  }

  function Sortfunction(Type) {
    if (Type === "Price High to Low") {
      const update = Listmintdata.sort(
        (a, b) => Number(b.strike_price) - Number(a.strike_price)
      );
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    } else if (Type === "Price Low to High") {
      const update = Listmintdata.sort(
        (a, b) => Number(a.strike_price) - Number(b.strike_price)
      );
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    } else if (Type === "Costomer Rating") {
      const update = Listmintdata.sort(
        (a, b) => Number(b.rating) - Number(a.rating)
      );
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    } else if (Type === "Better Discount") {
      const update = Listmintdata.sort((a, b) => {
        function log(str) {
          if (str) {
            str = str.split("(");
            str.shift();
            str = str.join("");
            str = str.split("%");
            return str.shift();
          }
        }
        a = log(a.discount);
        b = log(b.discount);
        return b - a;
      });
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    } else if (Type === "Popularity") {
      const update = Listmintdata.sort((a, b) => {
        function logd(str) {
          if (str) {
            let x = str.includes("k");
            if (x) {
              str = str.split(".").join("");
              str = str.split("k");
              str = str[0];
              str = str + "000";
              return +str;
            }
          }
        }
        b = logd(b.rating_count);
        a = logd(a.rating_count);
        return b - a;
      });
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    }
  }



  function cheakBox(prop){    
   const  ans = prop.split(",")
     
      let update = Listmintdata.filter(ele => ele.discounted_price >= ans[0] && ele.discounted_price <= ans[1])
      setdemo(update);
      setListmintdata(update);
      setdemo([]);
    }

 

  return (
    <>
    <Box width={"95%"} gap="10px" m={"auto"} bg="white">
      <Box
        p="10px"
        textAlign={"start"}
        onClick={() => Sortfunction("Price High to Low")}
      >
        <Text color="black">Home / Products </Text>
      </Box>
      <Box  display={["flex", "none", "none"]}>
          <Spacer />
        <ProductSideFiter Sortfunction={Sortfunction} />
        </Box>
      <Box p="10px" textAlign={"start"}>
        <Text display={["none", "flex", "flex"]} as="b" color="black">
          Crocs - {Listmintdata.length} items
        </Text>
      
      </Box>

      <Flex display={["none", "flex", "Flex"]}>
        <Box w="20%" p="3" display={["none", "flex", "Flex"]}>
          <Flex p="10px">
            <Text color={"black"} as="b">
              FILTER
            </Text>
            <Spacer />
            <Text pl="15px" color="red">CLEAR ALL</Text>
          </Flex>
        </Box>
        <ProductSideFiter Sortfunction={Sortfunction} />
      </Flex>

      <Flex>
        <FilterBox Mens={Mens} cheakBox={cheakBox} />
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
    </>
  );
};
