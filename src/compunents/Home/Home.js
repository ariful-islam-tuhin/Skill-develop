import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

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
      <h2>service{services.length}</h2>

      <div className="service-container">
        {newService.map((service) => (
          <Services key={service.id} service={service}></Services>
        ))}
      </div>
    </div>
  );
};

export default Home;
