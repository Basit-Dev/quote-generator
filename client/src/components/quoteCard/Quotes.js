import React from "react";
import Genre from "./Genre";

const Quotes = ({ displayQuote, quoteAuthor, quoteGenre }) => {
  return (
    <main>
      <div className="quote-card">
        <div className="quote-card__quote">{displayQuote}</div>
        <Genre
          className="quote-card__genre"
          author={quoteAuthor}
          category={quoteGenre}
        />
      </div>
    </main>
  );
};

export default Quotes;
