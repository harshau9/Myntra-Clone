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
