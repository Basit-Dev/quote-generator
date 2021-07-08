import React from "react";
import Genre from "./Genre";

const Quotes = ({ data }) => {
  return (
    <main>
      <div className="quote-card">
        <div className="quote-card__quote">{data}</div>
        <Genre className="quote-card__genre" />
      </div>
    </main>
  );
};

export default Quotes;
