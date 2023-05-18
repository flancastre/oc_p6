import React from "react";

const Footer = ({ img }) => {
  return (
    <footer>
      <div>
        <img
          src={img ? "../img/logo-white.png" : "./img/logo-white.png"}
          alt="logo kasa"
        />
        <p> &#xA9; 2023 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
