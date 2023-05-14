import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigation">
      <img src="./logo.png" alt="logo kasa" />
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Aceuil</li>
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
