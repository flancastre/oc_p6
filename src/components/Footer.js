import React from "react";
import logoWhite from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logoWhite} alt="logo kasa" />
        <p> &#xA9; 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
