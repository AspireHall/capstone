import React from "react";
import "./../../App.css";

const BookingForm = (props) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    props.dispatch({
      type: name === "date" ? "SET_DATE" : "SET_TIME",
      field: name,
      value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted", props.state);
    props.dispatch({ type: "RESET" });
    props.submitAPI(props.state);
    console.log(props.submitAPI(props.state));
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
              value={props.selectedDate}
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
              {props.availableTimes.map((time, index) => {
                return (
                  <option key={index} value={time}>
                    {time}
                  </option>
                );
              })}
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
