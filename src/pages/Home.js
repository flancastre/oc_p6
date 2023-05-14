import React, { useEffect } from "react";
import Navigations from "../components/Navigations";
import Banner from "../components/Banner";

const Home = () => {
  // useEffect(() => {
  //   fetch("../src/assets/db.json")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // });
  return (
    <div>
      <Navigations />
      <Banner />
      <h1>Bienvenue sur la page acceuil</h1>
    </div>
  );
};

export default Home;
