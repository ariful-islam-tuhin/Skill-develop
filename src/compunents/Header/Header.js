import {  faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const element = <FontAwesomeIcon icon={faLaptopHouse} />;

  const activeStyle = {
    
    color: "black",
  };
  return (
    <div>
      <nav className="text-whit header-background">      
        <NavLink className="skill text-white" activeStyle={activeStyle} to="/home">
            Skill Develop Center
          </NavLink>


        <div className='flex'>
        <div className="nabigation topnav">
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
