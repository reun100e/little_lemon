import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Asset 16@4x.png";

const Header = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" onClick={handleGoHome} />
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
