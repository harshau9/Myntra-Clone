import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Hotel from "../../pages/Home&Hotels/Hotel";
import Kids from '../../pages/Kids/Kids';
import MainLoginAndSignup from '../Authentication/MainPageAndNavbar'
import AdminPage from "../AdminPage/AdminPage";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<MainLoginAndSignup/>}/>
      <Route path="/AdminPage" element={<AdminPage/>}/>
    </Routes>
  );
};
