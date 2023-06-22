import React, { useState } from "react";
import { fetchAPI, submitAPI } from "./api";
import { useNavigate } from "react-router-dom";
import logo from "../images/Asset 9@4x.png";

const BookingForm = ({ availableTimes = [], dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfDinners, setNumberOfDinners] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isFormValid = validateForm();
    if (isFormValid) {
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
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!date) {
      errors.date = "Please select a date";
    }

    if (!time) {
      errors.time = "Please select a time";
    }

    if (!numberOfDinners) {
      errors.numberOfDinners = "Please enter the number of dinners";
    } else if (numberOfDinners < 0) {
      errors.numberOfDinners = "Number of dinners must be at least 1";
    }

    if (!occasion) {
      errors.occasion = "Please select an occasion";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    const times = await fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  return (
    <>
      <div className="hero">
        <img src={logo} alt="logo" />
        <h2>Book a table for any occasion!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">
            Date
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
              aria-label="On Click"
            />
            {formErrors.date && (
              <span className="error">{formErrors.date}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="time">
            Time
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-label="On Click"
            >
              <option value="">Select a time</option>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>
            {formErrors.time && (
              <span className="error">{formErrors.time}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfDinners">
            Number of Dinners
            <input
              type="number"
              id="numberOfDinners"
              value={numberOfDinners}
              min={1}
              max={24}
              onChange={(e) => setNumberOfDinners(e.target.value)}
              required
              aria-label="On Click"
            />
            {formErrors.numberOfDinners && (
              <span className="error">{formErrors.numberOfDinners}</span>
            )}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="occasion">
            Occasion
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              aria-label="On Click"
            >
              <option value="">Select an occasion</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
              <option value="Business">Business</option>
            </select>
            {formErrors.occasion && (
              <span className="error">{formErrors.occasion}</span>
            )}
          </label>
        </div>
        <div>
          <button
            className="btn submit"
            type="submit"
            disabled={Object.keys(formErrors).length > 0}
          >
            Book now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
