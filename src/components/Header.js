import React from "react";
import Nav from "../components/Nav";
import logo from "../images/Asset 16@4x.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <Nav />
      </div>
    </>
  );
};

export default Header;
