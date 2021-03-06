import React from "react";

import "./Service.css";

const Services = (props) => {
  const { id, name, price, picture } = props.service;

  return (
    <div className="col">
      <div className="transform col-sm ">
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{price}/-</h3>
        <img className="image" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Services;
