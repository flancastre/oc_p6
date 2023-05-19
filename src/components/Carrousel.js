import React, { useState } from "react";

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <img src={pictures[currentIndex]} alt="" />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>

      {pictures.length > 1 && (
        <p>
          Image {currentIndex + 1} of {pictures.length}
        </p>
      )}
    </div>
  );
};

export default Carrousel;
