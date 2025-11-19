import React, { useState } from "react";

const HoverText = ({ text, image, imageAlt, definition }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="hover-text">{text}</span>

      {isHovered && (
        <span className="def-container">
          <img src={image} alt={imageAlt} className="def-image" />
          <span>{definition}</span>
        </span>
      )}
    </span>
  );
};

export default HoverText;
