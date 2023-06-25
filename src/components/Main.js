import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../components/api";

// Reducer function to handle state changes
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update the state with the fetched available times
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0]; // Get the formatted today's date
      const times = await fetchAPI(formattedDate); // Fetch the available times for today's date
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    initializeTimes(); // Fetch the available times on component mount
  }, []);

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed"); // Navigates to the booking confirmed page
    } else {
      console.log("Error submitting form");
    }
  };

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/booking"
        element={
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm} // Pass the submitForm function
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Main;
