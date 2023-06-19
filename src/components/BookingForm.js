import { useState } from "react";
import "../App.css";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [num, setNum] = useState("");
  const [occasion, setOccasion] = useState("");
  const [sitting, setSitting] = useState("");

  const clearForm = () => {
    setDate("");
    setTime("");
    setNum("");
    setOccasion("");
    setSitting("");
  };

  const getIsFormValid = () => {
    return date && time && num && occasion !== "occasion";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Find a table for any occasion</h2>
            <div className="Field">
              <label>date</label>
              <input
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                placeholder="Date"
              />
            </div>
            <div className="Field">
              <label>time</label>
              <input
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                placeholder="Last name"
              />
            </div>
            <div className="Field">
              <label>num</label>
              <input
                value={num}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                placeholder="Number of Dinners"
              />
            </div>
            <div className="Field">
              <label>
                Occasion <sup>*</sup>
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="occasion">Occasion</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="Field">
              <label>
                Seating Options <sup>*</sup>
              </label>
              <select
                value={sitting}
                onChange={(e) => setSitting(e.target.value)}
              >
                <option value="standard">Standard</option>
                <option value="outside">Outside</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Lets go
            </button>
          </fieldset>
        </form>
      </div>
  );
};

export default BookingForm;
