import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const VerifiedAdmin = ({ children }) => {
  const { isAdminAuthenticated } = useSelector((store) => store.dataReducer);
  if (isAdminAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default VerifiedAdmin;
