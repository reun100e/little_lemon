import React from "react";
// import { useState } from "react";

const Main = () => {
  //       const[isActive, setIsActive] = useState(false);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setIsActive(!isActive);
  //   };

  //   const btnClass = 'sort-btn' + isActive ? 'is-active' : '';

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
        <div className="line"></div>
        <div className="dish-list">
          <div>
            <h4>Greek Salad</h4>
            <h5>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago spices!
            </h5>
            <h6>$12.99</h6>
          </div>
          <div className="line2"></div>
          <div>
            <h4>Greek Salad</h4>
            <h5>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago spices!
            </h5>
            <h6>$7.99</h6>
          </div>
          <div className="line2"></div>
          <div>
            <h4>Greek Salad</h4>
            <h5>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago spices!
            </h5>
            <h6>$20.00</h6>
          </div>
          <div className="line2"></div>
          <div>
            <h4>Greek Salad</h4>
            <h5>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago spices!
            </h5>
            <h6>$18.99</h6>
          </div>
          <div className="line2"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
