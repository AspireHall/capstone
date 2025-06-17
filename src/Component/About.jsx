import React from "react";
import "../App.css";
import Chef1 from "./../assets/Chef1.png";
import Chef2 from "./../assets/Chef2.png";

const About = () => {
  return (
    <div className="about-section">
      <div>
        <img className="image-chef" src={Chef1} alt="chef1" />
        <img className="image-chef" src={Chef2} alt="chef2" />
        <h1>About Us</h1>
        <p>
          Welcome to Little Lemon, a cozy neighborhood bistro nestled in the
          heart of Chicago. Founded by two passionate chefs with a love for bold
          Mediterranean flavors, Little Lemon blends the charm of a family-run
          kitchen with the sophistication of modern cuisine. We specialize in
          fresh, seasonal dishes inspired by the sun-soaked coasts of Italy,
          Greece, and southern France — all crafted with locally sourced
          ingredients and a whole lot of heart. From zesty lemon chicken to
          handmade pasta and herb-infused flatbreads, every plate tells a story
          of comfort, culture, and creativity. Whether you're stopping by for a
          casual lunch, a romantic dinner, or a celebratory toast with friends,
          Little Lemon is your spot for warm hospitality, vibrant food, and a
          little citrus twist in every experience.
        </p>
      </div>
    </div>
  );
};

export default About;
