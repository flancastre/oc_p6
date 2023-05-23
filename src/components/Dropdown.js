import React, { useState } from "react";

const Dropdown = ({ title, content, styles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropOpen = () => {
    setIsOpen(false);
  };

  const dropClose = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles ? "drop--about" : "drop"}>
      <div
        className="dropdown-container"
        onClick={() => {
          isOpen ? dropOpen() : dropClose();
        }}
      >
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
      <div className={isOpen ? "drop-content" : "drop-content-close"}>
        {isOpen &&
          (Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
