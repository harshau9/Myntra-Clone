import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Carousel.module.css";
import  Im1  from "./images/men1.png";
import  Im2  from "./images/men2.png";
import  Im3  from "./images/men3.png";
import  Im4  from "./images/men4.png";
import  Im5  from "./images/men5.png";
import  Im6  from "./images/men6.png";


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
