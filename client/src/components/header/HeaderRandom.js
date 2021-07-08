import React from "react";

const RandomHeader = ({ handleClick, image }) => {
  return (
    <header>
      random
      <img onClick={handleClick} src={image} alt="sync" />
    </header>
  );
};

export default RandomHeader;
