import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CrousalBox = ({ data, CrouselBox }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const mendata = [
    "https://th.bing.com/th/id/OIP.L51qzGCLtslIZn42Q0BFhgHaE7?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.RsLrjZDqbT1cvevgpZgfuAHaF7?pid=ImgDet&w=900&h=720&rs=1",
    "https://image.shutterstock.com/image-photo/sun-sets-below-clouds-260nw-18034228.jpg",
    "https://live.staticflickr.com/3160/2916623923_8f9abf480f.jpg",
    "https://external-preview.redd.it/ftHchWS2N8QJ1afAwhmrTEC6ahMKYhsj13EbIjAGQ14.png?format=pjpg&auto=webp&s=bed4376e0509aad5e70c2cb77d5d73136ab54709",
    "https://th.bing.com/th/id/OIP.4O8HuqjQIUn1ZbTa6F_FngHaEw?pid=ImgDet&w=1881&h=1209&rs=1"
  ]






  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={CrouselBox}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      h="13.5rem"
    >

     {data.images.map((ele, i)=>{
        return(
            <Box h="13.5rem" key={i/Date.now()}>
            <Image src={ele} />
          </Box>
        )
     })}
    </Carousel>
  );
};
