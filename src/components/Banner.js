import React from "react";

const Banner = ({ img, text, alt }) => {
  return (
    <div className="banner">
      <img src={img} alt={alt} className="img-banner" />
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;
