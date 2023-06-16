import React from "react";
import logo from "../images/Asset 20@4x.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} alt="logo" />
        <a href="/home">Homepage</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </div>
      <h6 className="copyright">Copyright © 2023 Little Lemon. All rights reserved</h6>
    </>
  );
};

export default Footer;
