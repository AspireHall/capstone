import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
const BookingPage = () => {
  const initializedTimes = {
    date: "",
    time: "",
    guests: "1",
    occassion: "Birthday",
  };
  function updateTimes(state, action) {
    switch (action.type) {
      case "SET_TIME":
        return { ...state, [action.field]: action.value };
      case "RESET":
        return initializedTimes;
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(updateTimes, initializedTimes);
  return (
    <div>
      <BookingForm state={state} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
