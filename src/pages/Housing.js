import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";

const Housing = () => {
  const { idH } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Navigations />
      <h1>Logement</h1>
      <ul>
        {data
          .filter((stay) => stay.id === idH)
          .map((stay, index) => (
            <li key={index}>{stay.title}</li>
          ))}
        {idH}
      </ul>
      <Footer />
    </div>
  );
};

export default Housing;
