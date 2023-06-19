import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/testimonials'>Testimonials</NavLink>
    </nav>

  );
};

export default Navbar;
