import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been successfully confirmed.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default ConfirmedBooking;
