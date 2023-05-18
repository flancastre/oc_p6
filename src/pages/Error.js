import React from "react";
import Navigations from "../components/Navigations";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navigations />
      <div className="error-container">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>

        <NavLink to="/">Retournez sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
