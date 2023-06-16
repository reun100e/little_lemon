import React from "react";

const Main = () => {
  return (
    <>
    <div className="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <h4>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </h4>
      <button>Reserve a table</button>
      </div>
      <div className="hero2">
        <h3>Order for delivery!</h3>
        <div className="dish-sort">
            <button>Lunch</button>
            <button>Mains</button>
            <button>Desserts</button>
            <button>A La Carte</button>
            <button>Specials</button>
        </div>
        <div className="dish-list">
            <h4>Greek Salad</h4>
            <h5>The famous greek salad of crispy lettuce, peppers, olives and our Chicago spices!</h5>
        </div>
      </div>
    </>
  );
};

export default Main;
