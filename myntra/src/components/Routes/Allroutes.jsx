import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Hotel from "../../pages/Home&Hotels/Hotel";
import Kids from "../../pages/Kids/Kids";
import AdminPage from "../AdminPage/AdminPage";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import PrivateRouteAdminPage from "../PrivateRoute/AdminPage";
import {Mens} from "../../pages/Men/Mens"
import {Womens} from "../../pages/Women/Womens"
export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Mens/>} />
      <Route path="/women" element={<Womens />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/AdminPage"
        element={
          <PrivateRouteAdminPage>
            <AdminPage />
          </PrivateRouteAdminPage>
        }
      />
    </Routes>
  );
};
