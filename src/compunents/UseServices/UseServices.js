import React from "react";

const UseServices = (props) => {
  const { id, name, price, picture } = props.uService;
  return (
    <div>
      <h2>service</h2>
      <h3>{name}</h3>
      <h3>{id}</h3>
      <h3>{price}</h3>
      <img src={picture} alt="" />
    </div>
  );
};

export default UseServices;
