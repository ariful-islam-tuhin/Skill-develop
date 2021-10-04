import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h4>Footer</h4>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/allservice">allService</NavLink>
        <NavLink to="/contuct">Contuct</NavLink>
      </nav>
    </div>
  );
};

export default Footer;
