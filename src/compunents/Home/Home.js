import React, { useEffect, useState } from "react";
import { Wave } from "react-animated-text";
import Services from "../Services/Services";
import "./Home.css";

import ReactPlayer from 'react-player/youtube'

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("datas.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const newService = services.slice(0, 6);

  return (
    <div>
      <div className="total-service">
        <br/>
        <h2> <Wave text=" We provide total (12) Service" effect="stretch" effectChange={2.2} /> </h2>
        <h3>Choice your wish</h3>
      </div>

  <ReactPlayer controls width="100%" url="https://youtu.be/TOuF7ZbcCUs"/>
 


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
