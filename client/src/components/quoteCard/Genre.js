import React from "react";

const Genre = ({ className, author, category }) => {
  return (
    <div className={className}>
      <h1>{author}</h1>
      <p>{category}</p>
    </div>
  );
};
export default Genre;
