import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};
