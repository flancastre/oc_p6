import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";

const About = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("./info.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data));
  }, []);

  return (
    <div>
      <Navigations />
      <Banner img="./img/about.png" alt="image d'une montagne" text="" />
      <div className="about-container">
        {dataInfo.map((infos, index) => (
          <Dropdown
            key={index}
            title={infos.title}
            content={infos.content}
            styles="1"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
