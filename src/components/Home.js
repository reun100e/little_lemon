import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="hero">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <h4>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        <Link to='/booking'>
        <button type='button'>Reserve a table</button>
        </Link>
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
            <h4>Bruschetta</h4>
            <h5>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
            </h5>
            <h6>$7.99</h6>
          </div>
          <div className="line2"></div>
          <div>
            <h4>Grilled Fish</h4>
            <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
            </h5>
            <h6>$20.00</h6>
          </div>
          <div className="line2"></div>
          <div>
            <h4>Pasta</h4>
            <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
            </h5>
            <h6>$18.99</h6>
          </div>
          <div className="line2"></div>
        </div>
      </div>
    </>
  );
};

export default Home;