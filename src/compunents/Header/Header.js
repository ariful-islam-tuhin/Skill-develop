import {  faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const element = <FontAwesomeIcon icon={faLaptopHouse} />;

  const activeStyle = {
    fontWeight: "bold",
    color: "black",
  };
  return (
    <div>
      <nav className="text-whit header-background">
        <span>
          {" "}
          {element}
          Skill Develop
        </span>
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
