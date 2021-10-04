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
      <div className="total-service">
        <h2> we provide total {services.length} service</h2>
        <h3>choice your wish</h3>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {services.map((uService) => (
            <UseServices key={uService.id} uService={uService}></UseServices>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllService;
