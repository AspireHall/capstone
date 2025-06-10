import React, { Fragment, useState } from "react";
import "./../../App.css";

const BookingForm = () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [data, setData] = useState({
    date: "",
    time: "",
    guest: "1",
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted", data);
    data;
  };

  return (
    <Fragment>
      <div className="booking-container">
        <h1>Book A Table</h1>
        <form onSubmit={submitForm}>
          <div className="booking-div">
            <label htmlFor="res-date">Choose date</label>
            <input
              name="date"
              type="date"
              value={data.date}
              onChange={handleChange}
              id="res-date"
            />
          </div>
          <div className="booking-div">
            <label htmlFor="res-time">Choose time</label>
            <select
              name="time"
              value={data.time}
              onChange={handleChange}
              id="res-time"
            >
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="booking-div">
            <label htmlFor="guests">Number of guests</label>
            <input
              name="guest"
              type="number"
              value={data.guest}
              onChange={handleChange}
              placeholder="1"
              min="1"
              max="10"
              id="guests"
            />
          </div>
          <div className="booking-div">
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              value={data.occasion}
              onChange={handleChange}
              id="occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
          <button type="submit">Make Your Reservation</button>
        </form>
      </div>
    </Fragment>
  );
};

export default BookingForm;
