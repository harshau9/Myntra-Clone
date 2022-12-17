import React from "react";
import { Fade } from "@mui/material";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Home from "./Home";
import Beauty from "./Beauty";

const NavbarPopUpComponents = ({ type }) => {
  return (
    <Fade in={type} timeout={1000}>
      <div>
        {type === "MEN" && <Men />}
        {type === "WOMEN" && <Women />}
        {type === "KIDS" && <Kids />}
        {type === "HOME" && <Home />}
        {type === "BEAUTY" && <Beauty />}
      </div>
    </Fade>
  );
};

export default NavbarPopUpComponents;
