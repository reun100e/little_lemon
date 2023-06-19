import React, { useState } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import BookingForm from "./BookingForm";

function Homepage() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <>
      <BookingForm availableTimes={availableTimes} />
      <Hero />
      <Specials />
    </>
  );
}

export default Homepage;
