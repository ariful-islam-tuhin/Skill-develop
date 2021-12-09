import React from "react";
import "./UseServices.css";

const UseServices = (props) => {
  const { id, name, price, picture } = props.uService;
  return (
    <div className="col">
      <div className="transform col-sm">
        <h3>Course:{id}</h3>
        <h3>{name}</h3>
        <h3>{price}/-</h3>
        <img className="image" src={picture} alt="" />
      </div>
    </div>
  );
};

export default UseServices;
