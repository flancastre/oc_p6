import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";

const Housing = () => {
  const { idH } = useParams();
  const [data, setData] = useState([]);
  const [filteredPictures, setFilteredPictures] = useState([]);
  const [rate, setRates] = useState("");

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
      setRates(filteredData[0].rating);
    }
  }, [data, idH]);

  return (
    <div>
      <Navigations img={1} />
      <div>
        {data
          .filter((stay) => stay.id === idH)
          .map((stay, index) => (
            <div key={index}>
              <Carrousel pictures={filteredPictures} />
              <div className="carrousel-content">
                <div className="carrousel-content-left">
                  <h2>{stay.title}</h2>
                  <p>{stay.location}</p>
                  <Tags tags={stay.tags} />
                </div>
                <div className="carrousel-content-right">
                  <div className="carrousel-content-right-top">
                    <p>{stay.host.name}</p>
                    <img src={stay.host.picture} alt="" />
                  </div>
                  <ul>
                    <Rating value={rate} />
                  </ul>
                </div>
              </div>
              <div className="carrousel-main">
                <Dropdown title="Description" content={stay.description} />
                <Dropdown title="Equipement" content={stay.equipments} />
              </div>
            </div>
          ))}
      </div>
      <Footer img={1} />
    </div>
  );
};

export default Housing;
