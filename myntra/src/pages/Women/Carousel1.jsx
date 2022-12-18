import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
import  Im1  from "./images/w1.png";
import  Im2  from "./images/w2.png";
import  Im3  from "./images/w3.png";
import  Im4  from "./images/w4.png";
import  Im5  from "./images/w5.png";
import  Im6  from "./images/w6.png";
import  Im7  from "./images/w7.png";
import  Im8  from "./images/w8.png";
import  Im9  from "./images/w9.png";
import  Im10  from "./images/w10.png";

const slideImages = [
  {
    url: Im1,
  },
  {
    url: Im2,
  },
  {
    url: Im3,
  },
  {
    url: Im4,
  },
  {
    url: Im5,
  },
  {
    url: Im6,
  },
  {
    url: Im7,
  },
  {
    url: Im8,
  },
  {
    url: Im9,
  },
  {
    url: Im10,
  },

];


const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
const Carousel1 = () => {
  return (
    <div className={styles.slidecontainer}>
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className={styles.eachslide} key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel1;
