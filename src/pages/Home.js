import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

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
      <div className="house-container">
        <ul>
          {data.map((house) => (
            <NavLink className="house-link" to={`/housing/${house.id}`}>
              <li key={house.id}>
                <div>
                  <img src={house.cover} alt="" />
                  <h2>{house.title}</h2>
                </div>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
