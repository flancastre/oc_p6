import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Navigations />
      <Banner
        img="./img/main.png"
        alt="Image d'une falaise"
        text="Chez vous, partout et ailleurs"
      />
      <ul>
        {data.map((house) => (
          <NavLink to={`/housing/${house.id}`}>
            <li key={house.id}>{house.title}</li>
          </NavLink>
        ))}
      </ul>
      <h1>Bienvenue sur la page acceuil</h1>
    </div>
  );
};

export default Home;
