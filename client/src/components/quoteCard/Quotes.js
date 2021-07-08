import React from "react";
import Genre from "./Genre";
import FetchData from "../fetchData";

const Quotes = () => {
  return (
    <main>
      <div className="quote-card">
        <div className="quote-card__quote">
          <FetchData />
        </div>
        <Genre className="quote-card__genre" />
      </div>
    </main>
  );
};

export default Quotes;
