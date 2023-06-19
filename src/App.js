import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import BookingForm from "./components/BookingForm"
import Homepage from "./components/Homepage";
import CustomersSay from "./components/CustomersSay";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<BookingForm />} />
        <Route path="testimonials" element={<CustomersSay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
