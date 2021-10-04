import React, { useEffect, useState } from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("datas.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const newService = services.slice(0, 4);

  return (
    <div>
      <div className="total-service">
        <h2> We provide total {services.length} Service</h2>
        <h3>Choice your wish</h3>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {newService.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
