import React from "react";
import Navigations from "../components/Navigations";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navigations />
      <Banner img="./img/about.png" alt="image d'une montagne" text="" />
      <h1>a propos</h1>
      <Footer />
    </div>
  );
};

export default About;
