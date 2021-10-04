import React, { useEffect, useState } from "react";
import UseServices from "../UseServices/UseServices";

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("datas.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2>service{services.length}</h2>
      <div className="service-container">
        {services.map((uService) => (
          <UseServices key={uService.id} uService={uService}></UseServices>
        ))}
      </div>
    </div>
  );
};

export default AllService;
