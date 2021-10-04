import React from "react";
import { NavLink } from "react-router-dom";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.css";

const Header = () => {
  const element = <FontAwesomeIcon icon={faLaptop} />;

  const activeStyle = {
    fontWeight: "bold",
    color: "black",
  };
  return (
    <div className="header-background">
      <nav className="p-3   text-white">
        <span className="span">
          {" "}
          {element}
          <span className="sspan">Skill </span> Develop
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
