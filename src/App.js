import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
