import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Asset 20@4x.png";

function Footer() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="logo" onClick={handleGoHome} />
        <nav className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
        </nav>
      </div>
      <p className="copyright">
        Copyright © Little Lemon 2023. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
