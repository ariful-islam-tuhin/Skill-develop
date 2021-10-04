import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "black",
  };
  return (
    <div className="header-background">
      <nav className="p-3 mb-2  text-white">
        <span>skill develop</span>
        <div className="nabigation">
          <NavLink className="navlink" activeStyle={activeStyle} to="/home">
            Home
          </NavLink>
          <NavLink className="navlink" activeStyle={activeStyle} to="/about">
            About
          </NavLink>
          <NavLink
            className="navlink"
            activeStyle={activeStyle}
            to="/allservice"
          >
            All Service
          </NavLink>
          <NavLink className="navlink" activeStyle={activeStyle} to="/contuct">
            Contuct
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
