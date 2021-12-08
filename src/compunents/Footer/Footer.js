import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";






const Footer = () => {
  return (
    <div>
      <nav>
        <div className="navigation">
          <NavLink className="navlink" to="/home">
            Home
          </NavLink>
          <NavLink className="navlink" to="/about">
            About
          </NavLink>
          <NavLink className="navlink" to="/allservice">
            allService
          </NavLink>
          <NavLink className="navlink" to="/contuct">
            Contuct
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
