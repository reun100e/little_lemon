import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Asset 9@4x.png";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="hero">
      <img src={logo} alt="logo" />
      <h2>Booking Confirmed!</h2>
      <h3>Thankyou for choosing Little Lemon</h3>
      <h3>Your booking has been successfully confirmed.</h3>
      <button className="btn" onClick={handleGoHome}>
        Go back Home
      </button>
    </div>
  );
};

export default ConfirmedBooking;
