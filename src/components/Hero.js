import { Link } from "react-router-dom";

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
        <Link to="/booking">
          <button type="button">Reserve a table</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
