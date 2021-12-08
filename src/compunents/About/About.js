import React from "react";
import { Wave } from "react-animated-text";

const About = () => {
  return (
    <div>
      <h1>  <Wave text=" About us " /> </h1>
     
      <h5 className="p 4">
        It is a skill development center, we provide total twelve service, there
        are allow all kind of people, It is a air condition classroom, Every day
        we are taking four class.For your bright future you should come here,
        and you shoud taking a course whice course are comfortable for you, So
        we request you all that all of you come and try to do something, If you
        want you can develop you socity and your country. It is a skill
        development center, we provide total twelve service, there are allow all
        kind of people, It is a air condition classroom, Every day we are taking
        four class.For your bright future you should come here, and you shoud
        taking a course whice course are comfortable for you, So we request you
        all that all of you come and try to do something, If you want you can
        develop you socity and your country.
      </h5>
      <h2>Our Classrome</h2>
      <img className="about-image img-fluid max-width:100% height-auto"
        src="https://images.ctfassets.net/p0qf7j048i0q/7y7RtMKuzudxAtN68NzU3b/dfd2a4cdc7c9da04ad78fe8245e912a1/G911029504.jpg"
        alt=""
      />
    </div>
  );
};

export default About;
