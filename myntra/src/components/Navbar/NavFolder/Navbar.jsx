import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import Logo1 from "./myn.png";
import NavbarPopUpComponents from "../NavComponent/NavbarPopUpComponents";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";

const getuserData = async () => {
  try {
    let res = await axios.get(`https://mock-server-trz7.onrender.com/User`);
    return await res.data;
  } catch (e) {
    return e;
  }
};

const PostRequest = async () => {
  try {
    let response = await axios.patch(
      `https://mock-server-trz7.onrender.com/User`,
      {
        id: "Admin Page",
        isAuth: false,
      }
    );

    return await response.data;
  } catch (err) {
    return err;
  }
};

const Navbar = () => {
  const navigate = useNavigate();
  const [howerState, setHowerState] = useState("");
  const [userData, setUserData] = useState({});
  const { id, isAuth } = userData;
  const toast = useToast();
  const hoverHandler = (type) => {
    setHowerState(type);
  };
  const handleNoHover = () => {
    setHowerState("");
  };

  const HandleSignout = () => {
    PostRequest()
      .then((res) => {
        toast({
          title: "Logout Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1100);
      })
      .catch((err) => {
        toast({
          title: "Something Went Wrong",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        });
      });
  };
  useEffect(() => {
    getuserData()
      .then((res) => setUserData(res))
      .catch((err) =>
        toast({
          title: "Something Went Wrong",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-right",
        })
      );
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
                onClick={() => navigate("/ProductPage")}
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
            <div className={style.card3}>

              {isAuth ? (
                <Button onClick={HandleSignout}>Signout</Button>
              ) : (
                <Link to={"/login"}>
                  {" "}
                  <button>
                    <FaRegUser fontSize="2.5vh" cursor="pointer" />
                  </button>
                </Link>
              )}

            

            </div>
            {/* <div className={style.card3}>
              <Link to="/my_wishlist">
                <BsHeart fontSize="2.5vh" cursor="pointer" />
              </Link>
            </div> */}
            <div className={style.card3}>
 
            

              <Link to="/bag">
                <BsHandbag fontSize="2.5vh" cursor="pointer" />
              </Link>
            </div>
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
  color: #000000;
  font-size: 15px;
  font-family: sans-serif;
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
