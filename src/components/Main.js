import React, { useReducer, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import BookingForm from "./BookingForm";
import {fetchAPI} from "./Api";

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

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];
      const times = await fetchAPI(formattedDate);
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    initializeTimes();
  }, []);

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0]; // Get the formatted today's date
      const times = await fetchAPI(formattedDate); // Fetch the available times for today's date
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    initializeTimes(); // Fetch the available times on component mount
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/booking"
        element={
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        }
      />
    </Routes>
  );
};

export default Main;
