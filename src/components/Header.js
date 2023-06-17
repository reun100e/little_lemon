import React from "react";
import Navbar from "./Navbar";
import logo from "../images/Asset 16@4x.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
