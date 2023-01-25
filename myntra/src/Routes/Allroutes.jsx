import React from "react";
import { Route, Routes } from "react-router-dom";

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

import PrivateRouteAdminPage from "../PrivateRoute/AdminPage";

import AdminNavbar from "../pages/AdminPage/Navbar";
import AddHotel from "../pages/AdminPage/Component/AddHotel";

export const Allroutes = () => {
  return (
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
      <Route path="/bag" element={<SingleCartPage />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/bag/cart" element={<Cart />}></Route>
      <Route path="/bag/product" element={<ProductCart />}></Route>

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
    </Routes>
  );
};
