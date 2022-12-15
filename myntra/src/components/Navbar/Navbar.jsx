import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css"
import styled from "styled-components";
import {Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 100px 500px 500px 200px;
  background-color: whitesmoke;
  justify-content: space-around;
  height: 80px;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
`;
const Navlink = styled.div`
  text-decoration: none;
  padding: 5px;
  color: black;
`;
const linkStyle = {
  textDecoration: "none",
  padding: "10px",
  color: "black",
};
const divStyle = {
  position: "sticky",
  top: "0%",
  backgroundColor: "#ffffff",
  zIndex: "1",
};
const imgStyle = { height: "30px", margin: "20px", cursor: "pointer"};
const wish = { fontSize: "10px", paddingLeft: "20px" };
const wishIcon = { marginTop: "15px" };
const navStyles = { marginTop: "8px", padding: "10px" };
const searchBar = {
  display: "flex",
  marginTop: "25px",
  paddingLeft: "80px",
  backgroundColor: "whitesmoke",
};
function Navbar() {
  const navigate = useNavigate()
  const userAuth = useSelector((state) => state.loginreq.userAuth);
  const username = useSelector((state) => state.loginreq.username);
  // const { count } = useContext(FilterContext)
  // console.log(count)
  return (
      <div style={divStyle}>
          <div style={{}}>
            <img
              onClick={() => navigate("/")}
              style={imgStyle}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png"
              alt=""
            />
          </div>
          </div>
    
   )
   }          