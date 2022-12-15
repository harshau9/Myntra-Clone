<<<<<<< HEAD
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home;
=======
import React from "react";
import Footer from "../Footer/Footer";
import "../Home/Home.css";
import { HomeMid } from "./HomeMid";
export const Home = () => {
  return (
    <div className="home">
      <HomeMid />
      <Footer />
    </div>
  );
};
>>>>>>> 322537e3109cbc2a17898487fc43c5ba093d5b73
