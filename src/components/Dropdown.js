import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropOpen = () => {
    setIsOpen(false);
  };

  const dropClose = () => {
    setIsOpen(true);
  };

  return (
    <div className="drop">
      <div className="dropdown-container">
        <h3>{title}</h3>

        {isOpen ? (
          <img
            src="../img/dropdown-open.png"
            alt=""
            onClick={() => dropOpen()}
          />
        ) : (
          <img
            src="../img/dropdown-close.png"
            alt=""
            onClick={() => dropClose()}
          />
        )}
      </div>
      <div>{isOpen && <p>{content}</p>}</div>
    </div>
  );
};

export default Dropdown;
