import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";

const Housing = () => {
  const { idH } = useParams();
  const [data, setData] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);

  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((stay) => stay.id === idH);
    if (filteredData.length > 0) {
      setFilteredPictures(filteredData[0].pictures);
    }
  }, [data, idH]);

  return (
    <div>
      <Navigations img={1} />
      <h1>Logement</h1>
      <ul>
        {data
          .filter((stay) => stay.id === idH)
          .map((stay, index) => (
            <li key={index}>
              <p>{stay.title}</p>
              <Carrousel pictures={filteredPictures} />
            </li>
          ))}
      </ul>
      <Footer img={1} />
    </div>
  );
};

export default Housing;
