import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navigations = () => {
  return (
    <div className="navigation">
      <NavLink to="/" className="logo-link">
        <img src={logo} alt="logo kasa" />
      </NavLink>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Acceuil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigations;
