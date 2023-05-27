import React, { useState } from "react";
import dropdownOpen from "../assets/img/dropdown-open.png";
import dropdownClose from "../assets/img/dropdown-close.png";

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
          <img src={dropdownOpen} alt="" onClick={() => dropOpen()} />
        ) : (
          <img src={dropdownClose} alt="" onClick={() => dropClose()} />
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
