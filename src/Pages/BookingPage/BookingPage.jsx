import React, { useReducer, useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./../../api/api";

const date = new Date();
const availableTimes = fetchAPI(date);
const formattedDate = date.toISOString().split("T")[0];

const initializeTimes = {
  date: formattedDate,
  time: availableTimes[0] || "",
  guests: "1",
  occassion: "Birthday",
};

function updateTimes(state, action) {
  switch (action.type) {
    case "SET_TIME":
      return { ...state, [action.field]: action.value };
    case "SET_DATE": {
      const availableTimes = fetchAPI(new Date(action.value));
      return {
        ...state,
        date: action.value,
        time: availableTimes[0] || "",
      };
    }
    case "RESET":
      return initializeTimes;
    default:
      return state;
  }
}

const BookingPage = () => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

  useEffect(() => {
    const newTimes = fetchAPI(new Date(state.date));
    setAvailableTimes(newTimes);
  }, [state.date]);

  console.log();

  return (
    <div>
      <BookingForm
        submitAPI={submitAPI}
        availableTimes={availableTimes}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
