import React from "react";
import "./../App.css";
import { Link } from "react-router";
import chicken from "./../assets/lemonChicken.png";
import salad from "./../assets/salad.png";
import bruchetta from "./../assets/bruchetta.png";
import dessert from "./../assets/dessert.png";

const Main = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-intro">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Nestled in the heart of the city, Little Lemon is a cozy,
            Mediterranean-inspired eatery known for its fresh ingredients, bold
            flavors, and warm, inviting atmosphere. From zesty lemon garlic
            chicken to homemade citrus desserts, every dish is crafted with care
            to bring a burst of sunshine to your plate. Whether you're here for
            a casual lunch, a romantic dinner, or a relaxed night out with
            friends, Little Lemon offers a delicious and memorable dining
            experience.{" "}
          </p>
          <Link to="/booking">
            <button>Book A Table</button>
          </Link>
        </div>
        <div>
          <img className="image1" src={chicken} />
        </div>
      </div>
      <div className="specials">
        <div className="specials-title">Specials</div>
        <div className="specials-order">
          <button className="order-btn">Order Now</button>
        </div>
      </div>
      <div className="specials-section">
        <div className="card">
          <img className="card-image" src={salad} />
          <h2>Greek Salad</h2>
          <p>
            A vibrant, refreshing mix of crisp cucumbers, juicy tomatoes, red
            onions, Kalamata olives, and creamy feta cheese. Tossed with a
            drizzle of olive oil, a splash of red wine vinegar, and sprinkled
            with oregano, it&apos;s the perfect balance of tangy, savory, and
            fresh flavors—a Mediterranean classic that&apos;s both simple and
            satisfying.
          </p>
        </div>
        <div className="card">
          <img className="card-image" src={bruchetta} />
          <h2>Bruchetta</h2>
          <p>
            Toasted slices of baguette are topped with a vibrant mix of fresh
            lemon zest, juicy cherry tomatoes, garlic, basil, and a drizzle of
            olive oil. Light, refreshing, and bursting with citrus flavor,
            it&apos;s the perfect starter for a sunny meal or summer gathering.
          </p>
        </div>
        <div className="card">
          <img className="card-image" src={dessert} />
          <h2>Lemon Dessert</h2>
          <p>
            This lemon dessert is a light, tangy treat that perfectly balances
            sweetness with citrusy zest. Made with fresh lemon juice and zest,
            it offers a smooth, refreshing finish—whether it&apos;s a silky
            lemon tart, fluffy mousse, or creamy lemon bars. Each bite delivers
            a bright, sunny burst of flavor that&apos;s both elegant and
            irresistible.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
