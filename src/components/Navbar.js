import "./2124880.css";
import Image from "../img/Farm to plate-1 (1).png";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import {AiOutlineMenu, AiOutlineMinus } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1><img src={Image} /></h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      <div className="menubutton" onClick={handleClick}>
        {click ? (
          <AiOutlineMinus size={25} style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenu size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;