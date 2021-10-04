import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <nav>
      <h4>skill develop</h4>
      <NavLink activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/allservice">
        All Service
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/contuct">
        Contuct
      </NavLink>
    </nav>
  );
};

export default Header;
