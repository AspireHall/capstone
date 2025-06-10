import { Fragment } from "react";
import "./App.css";
import Main from "./Component/Main";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import BookingPage from "./Pages/BookingPage/BookingPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
