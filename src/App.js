import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Reserve from "./components/Reserve";
import Homepage from "./components/Homepage";
import CustomersSay from "./components/CustomersSay";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="booking" element={<Reserve />} />
        <Route path="testimonials" element={<CustomersSay />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
