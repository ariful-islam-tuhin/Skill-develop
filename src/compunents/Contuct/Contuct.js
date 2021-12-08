import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../image/Arif.jpg";

import React from "react";

const Contuct = () => {
  const element = <FontAwesomeIcon icon={faPhone} />;

  return (
    <div className="pt-5 pb-5">
      <img className="about-image" src={image} alt="" />
      <h4 className="pt-5"> {element} Phone:01320320919</h4>
      <h5>FaceBook:https://www.facebook.com/profile.php?id=100004593707539</h5>
      <h5 className="pb-5">Gmail:ariful.islam.tuhin.1830@gmail.com</h5>
    </div>
  );
};

export default Contuct;
