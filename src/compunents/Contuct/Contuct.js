import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Contuct = () => {
  const element = <FontAwesomeIcon icon={faPhone} />;

  return (
    <div className="pt-5 pb-5">
      <img
        className="image"
        src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.18169-9/18010_418471861649267_3829920563510362002_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=gnHIFfJWFjkAX-mVd-6&_nc_ht=scontent.fdac5-1.fna&oh=1fa45fe676bf4f05f9f320efcafcca97&oe=617EDB00"
        alt=""
      />
      <h4 className="pt-5"> {element} Phone:01320320919</h4>
      <h5>FaceBook:https://www.facebook.com/profile.php?id=100004593707539</h5>
      <h5 className="pb-5">Gmail:ariful.islam.tuhin.1830@gmail.com</h5>
    </div>
  );
};

export default Contuct;
