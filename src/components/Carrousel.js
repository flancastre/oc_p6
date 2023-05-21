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
    <div className="carrousel-container">
      <img src={pictures[currentIndex]} alt="" />
      <button
        className={pictures.length > 1 ? "prev-btn" : "btn-none"}
        onClick={previousImage}
      >
        <img src="../img/arrow-left.png" alt="arrow left" />
      </button>
      <button
        className={pictures.length > 1 ? "next-btn" : "btn-none"}
        onClick={nextImage}
      >
        <img src="../img/arrow-right.png" alt="arrow right" />
      </button>

      {pictures.length > 1 && (
        <p className="p-carrousel">
          {currentIndex + 1} / {pictures.length}
        </p>
      )}
    </div>
  );
};

export default Carrousel;
