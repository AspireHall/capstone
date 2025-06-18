import React from "react";
import "./../App.css";
import review from "./reviews.json";

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h1>Testimonials</h1>
      {review.map((review, id) => {
        return (
          <div className="testimonial-card" key={id}>
            <h2>Rating&nbsp;{review.rating}/5</h2>
            <div>
              <img className="testimonial-image" src={review.image} />
              <h2>{review.profile.name}</h2>
              <h3>{review.profile.location}</h3>
            </div>
            <p>{review.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
