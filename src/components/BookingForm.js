import React, { useState } from "react";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes = [], dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfDinners, setNumberOfDinners] = useState("");
  const [occasion, setOccasion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      date,
      time,
      numberOfDinners,
      occasion,
    };
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed"); // Navigate to the booking confirmed page
    } else {
      console.log("Error submitting form");
    }
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    const times = await fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Time:
        <select value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Dinners:
        <input
          type="number"
          value={numberOfDinners}
          onChange={(e) => setNumberOfDinners(e.target.value)}
        />
      </label>
      <label>
        Occasion:
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option>Anniversary</option>
          <option>Birthday</option>
          <option>Business</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
