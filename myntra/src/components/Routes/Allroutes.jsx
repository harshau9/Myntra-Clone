import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import Hotel from "../../pages/Home&Hotels/Hotel";
import Kids from "../../pages/Kids/Kids";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import PrivateRouteAdminPage from "../PrivateRoute/AdminPage";
import { Mens } from "../../pages/Men/Mens";
import { Womens } from "../../pages/Women/Womens";
import { ProductPageApi } from "../../pages/ProductPageFetch/ProductPageApi";
import {Beauty } from "../../pages/Beauty/Beauty";
import AdminNavbar from "../AdminPage/Navbar";
import AddHotel from "../AdminPage/Component/AddHotel";
import Checkout from "../../pages/Checkout/Checkout";
import Cart from "../../pages/cartPage/Cart";
import ProductCart from "../../pages/cartPage/ProductCart";
import { SingleCartPage } from "../../pages/cartPage/SingleCartPage";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Mens />} />
      <Route path="/women" element={<Womens />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/beauty" element={<Beauty/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/ProductPage" element={<ProductPageApi />} />
      <Route
        path="/AdminPage"
        element={
          <PrivateRouteAdminPage>
            <AdminNavbar />
          </PrivateRouteAdminPage>
        }
      />
      <Route
        path="/AdminPage/AddHotel"
        element={
          <PrivateRouteAdminPage>
            <AddHotel />
          </PrivateRouteAdminPage>
        }
      />

      <Route path="/bag" element={<SingleCartPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="bag/cart" element={<Cart />}></Route>
      <Route path="bag/product" element={<ProductCart />}></Route>
    </Routes>
  );
};
