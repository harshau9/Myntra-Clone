import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import ErrorPage from "../pages/ErrorPage";

import { Home } from "../pages/Home/Home";
import SignupPage from "../pages/Authentication/SignupPage";
import LoginPage from "../pages/Authentication/LoginPage";
import { Mens } from "../pages/Men/Mens";
import { Womens } from "../pages/Women/Womens";
import Hotel from "../pages/Home&Hotels/Hotel";
import Kids from "../pages/Kids/Kids";
import { Beauty } from "../pages/Beauty/Beauty";
import { ProductPageApi } from "../pages/ProductPageFetch/ProductPageApi";
import { SingleCartPage } from "../pages/cartPage/SingleCartPage";
import Checkout from "../pages/Checkout/Checkout";
import Cart from "../pages/cartPage/Cart";
import ProductCart from "../pages/cartPage/ProductCart";

import AdminPage from "../pages/AdminPage/AdminPage";
import Update from "../pages/Home&Hotels/Update";

import VerifiedUser from "../PrivateRoute/VerifiedUser";
import VerifiedAdmin from "../PrivateRoute/VerifiedAdmin";

export const Allroutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" element={<Womens />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/ProductPage" element={<ProductPageApi />} />
        <Route
          path="/bag"
          element={
            <VerifiedUser>
              <SingleCartPage />
            </VerifiedUser>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <VerifiedUser>
              <Checkout />
            </VerifiedUser>
          }
        ></Route>
        <Route
          path="/bag/cart"
          element={
            <VerifiedUser>
              <Cart />
            </VerifiedUser>
          }
        ></Route>
        <Route
          path="/bag/product"
          element={
            <VerifiedUser>
              <ProductCart />
            </VerifiedUser>
          }
        ></Route>

        <Route
          path="/AdminPage"
          element={
            <VerifiedAdmin>
              <AdminPage />
            </VerifiedAdmin>
          }
        />
        <Route
          path="/AdminPage/AddHotel"
          element={
            <VerifiedAdmin>
              <Update />
            </VerifiedAdmin>
          }
        />
        <Route path='/error' element={<ErrorPage/> } />
      </Routes>
      <Footer />
    </>
  );
};
