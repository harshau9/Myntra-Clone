import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import Logo1 from "./mtsp.jpeg";
// import { IoIosSearch } from 'react-icons/io';
// import { FaRegUser } from 'react-icons/fa';
// import { RiGift2Line } from 'react-icons/ri';
// import { BsHandbag } from 'react-icons/bs';
import NavbarPopUpComponents from "../NavComponent/NavbarPopUpComponents";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const navigate = useNavigate();
  const [howerState, setHowerState] = useState("");
  const [login, setLogin] = useState(false);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleNoHover = () => {
    setHowerState("");
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
      localStorage.removeItem("user");
      localStorage.removeItem("oAuth");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));
    if (data) setLogin(true);
  }, []);
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              src={Logo1}
              className={style.card4}
              alt="myntra logo"
            />
            <Subnav>
              <p
                onClick={() => navigate("/men")}
                onMouseOver={() => hoverHandler("MEN")}
              >
                MEN{" "}
              </p>
              <p
                onClick={() => navigate("/women")}
                onMouseEnter={() => hoverHandler("WOMEN")}
              >
                WOMEN
              </p>
              <p
                onClick={() => navigate("/kids")}
                onMouseEnter={() => hoverHandler("KIDS")}
              >
                KIDS
              </p>
              <p
                onClick={() => navigate("/hotel")}
                onMouseEnter={() => hoverHandler("HOME")}
              >
                HOME & LIVING
              </p>
              <p
                onClick={() => navigate("/")}
                onMouseEnter={() => hoverHandler("BEAUTY")}
              >
                BEAUTY
              </p>
              <p
                onClick={() => navigate("/")}
                onMouseEnter={() => hoverHandler("STUDIO")}
              >
                STUDIO
              </p>
            </Subnav>
          </div>
          <div>
            <div className={style.inputContainer}>
              <input
                style={{ position: "relative" }}
                type="text"
                className={style.input}
                placeholder="Search for products, brands and more"
              />
            </div>
            <div className={style.card2}>
              {/* <p>
                <FaRegUser fontSize="2.5vh" cursor="pointer" />
              </p> */}
              <button onClick={() => handleLogin()}>
                {!login ? "Sign in" : "Signout"}
              </button>
            </div>
            <div className={style.card3}>{/* <MuiDrawer /> */}</div>
          </div>
        </div>

        <div className={style.content} onMouseLeave={() => setHowerState("")}>
          {howerState && <NavbarPopUpComponents type={howerState} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;

const Subnav = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  // border:1px solid #e6dede;
  align-items: center;
  height: 6.3vh;
  background-color: #ffffff;
  gap: 2vw;
  font-weight: 400;
  color: gray;
  font-size: 15px;
  // margin-top:63px;
  p:hover {
    border-bottom: 3px solid #fc3581;
    cursor: pointer;
    padding: 1.7vh 0 1.7vh 0;
    color: #fc3581;
    font-weight: 600;
  }
`;
// const Content = styled.div`
// .content{
//     position: absolute;
//     z-index: 100000;
//     width: 100vw;
// }
