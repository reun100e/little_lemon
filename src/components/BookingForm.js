import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfDinners, setNumberOfDinners] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and any additional logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Number of Dinners:
        <input type="number" value={numberOfDinners} onChange={(e) => setNumberOfDinners(e.target.value)} />
      </label>
      <label>
        Occasion:
        <input type="text" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
