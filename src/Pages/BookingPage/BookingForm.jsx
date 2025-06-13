import React from "react";
import "./../../App.css";

const BookingForm = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.dispatch({ type: "SET_TIME", field: name, value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted", props.state);
    props.dispatch({ type: "RESET" });
  };

  return (
    <>
      <div className="booking-container">
        <h1>Book A Table</h1>
        <form onSubmit={submitForm}>
          <div className="booking-div">
            <label htmlFor="res-date">Choose date</label>
            <input
              name="date"
              type="date"
              value={props.state.date}
              onChange={handleChange}
              id="res-date"
            />
          </div>
          <div className="booking-div">
            <label htmlFor="res-time">Choose time</label>
            <select
              name="time"
              value={props.state.time}
              onChange={handleChange}
              id="res-time"
            >
              <option value="">Select time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
          </div>
          <div className="booking-div">
            <label htmlFor="res-guests">Number of guests</label>
            <input
              name="guests"
              type="number"
              value={props.state.guests}
              onChange={handleChange}
              placeholder="1"
              min="1"
              max="10"
              id="res-guests"
            />
          </div>
          <div className="booking-div">
            <label htmlFor="res-occasion">Occasion</label>
            <select
              name="occasion"
              value={props.state.occasion}
              onChange={handleChange}
              id="res-occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <button type="submit">Make Your Reservation</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
