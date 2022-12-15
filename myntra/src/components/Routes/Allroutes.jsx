import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Hotel from "../../pages/Home&Hotels/Hotel";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
    </Routes>
  );
};
