import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Hotel from "../../pages/Home&Hotels/Hotel";
import Kids from '../../pages/Kids/Kids';

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/kids" element={<Kids />} />
    </Routes>
  );
};
