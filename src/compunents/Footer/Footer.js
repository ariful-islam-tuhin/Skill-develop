import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";






const Footer = () => {
  return (
    <div>
      <nav>
        <div className="row  navigation">        

       <div className="col-lg-4">
            <NavLink className="navlink" to="/about">
               About <br/>              
            </NavLink>
            <p>It is a skill development center, we provide total twelve service, there are allow all kind of people, It is a air condition classroom, Every day we are taking four class.For your bright future you should come here, and you shoud taking a course whice course are comfortable for you</p>
       </div>
       <div className="col-lg-4 ">
            <NavLink className="navlink" to="/contuct">
            Contuct <br/>
            </NavLink>
            Gmail: ariful.islam.tuhin.1830@gmail.com <br/>
            Phone: 01320320919 <br/>
            facebook: <br/>
            Twiter:  <br/>
            Linkedin:
            
       </div>
       <div className="col-lg-4 bg-danger">
       <img className="image" src="https://www.karonia.com/assets/img/footer/footer-background.png" alt="" />
       </div>
          
        
        
        </div>
      </nav>
    </div>
  );
};

export default Footer;
