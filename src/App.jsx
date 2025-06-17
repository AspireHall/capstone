import { Fragment } from "react";
import "./App.css";
import Main from "./Component/Main";
import Nav from "./Component/Nav";
import About from "./Component/About";
import Footer from "./Component/Footer";
import BookingPage from "./Pages/BookingPage/BookingPage";
import { Routes, Route } from "react-router";
import ConfirmationPage from "./Pages/BookingPage/ConfirmationPage";

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="booking" element={<BookingPage />} />
        <Route path="confirmation" element={<ConfirmationPage />} />
      </Routes>
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
