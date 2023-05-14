import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("../src/assets/db.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <div>
      <h1>Bienvenue sur la page acceuil</h1>
    </div>
  );
};

export default Home;
