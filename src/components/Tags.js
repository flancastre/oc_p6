import React from "react";

const Tags = ({ tags }) => {
  return (
    <ul className="tags-container">
      {tags.map((tag, index) => (
        <li className="tags" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
