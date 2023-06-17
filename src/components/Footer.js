import React from "react";
import logo from "../images/Asset 20@4x.png";
import Navbar from "../components/Navbar"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} alt="logo" />
        <Navbar />
      </div>
      <h6 className="copyright">Copyright © 2023 Little Lemon. All rights reserved</h6>
    </>
  );
};

export default Footer;
