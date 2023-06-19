import React, { useState, useReducer } from 'react';

function BookingForm({ availableTimesProp }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const updateTimes = (selectedDate) => {
    // Update availableTimes based on the selected date
    // Replace this logic with your own implementation
    const newTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    setAvailableTimesState(newTimes);
  };

  const initializeTimes = () => {
    // Initialize the availableTimes state
    // Replace this logic with your own implementation
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return initialTimes;
  };

  const [availableTimesState, setAvailableTimesState] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'UPDATE_TIMES':
          return updateTimes(action.date);
        default:
          return state;
      }
    },
    [],
    initializeTimes
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      date,
      time,
      guests,
      occasion,
    });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setAvailableTimesState({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimesState.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
