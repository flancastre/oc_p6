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
      <div>
        {dataInfo.map((infos) => (
          <Dropdown
            title={infos.title}
            content={infos.content}
            test="1"
            styles="drop--about"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
