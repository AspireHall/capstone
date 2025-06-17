import React from "react";
import "./../App.css";
import logo from "./../assets/logo.png";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div>
        <img className="logo-footer" src={logo} alt="logo" />
        <h2> Little Lemon Restaurant </h2>
      </div>
    </div>
  );
};

export default Footer;
