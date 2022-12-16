import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const GetAboutisAuth = async () => {
  try {
    let response = await axios.get(
      `https://mock-server-trz7.onrender.com/Admin`
    );

    return await response.data;
  } catch (err) {
    return err;
  }
};

const PrivateRouteAdminPage = ({ children }) => {
  const navigate = useNavigate();
  const [Admin, setAdmin] = useState({});
  const { isAuth } = Admin;

  useEffect(() => {
    GetAboutisAuth()
      .then((res) => setAdmin(res))
      .catch((err) => console.log(err));
  }, []);

  if (!isAuth) {
    navigate("/login");
  } else {
    return children;
  }
};

export default PrivateRouteAdminPage;
