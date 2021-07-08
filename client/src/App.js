import React from "react";
import RandomHeader from "./components/header/HeaderRandom";
import DisplayQuotes from "./components/quoteCard/Quotes";
import SyncImage from "./images/sync_black.svg";

function App() {
  const getRandomQuote = () => {
    return console.log("clicked");
  };
  return (
    <div className="container">
      <RandomHeader handleClick={getRandomQuote} image={SyncImage} />
      <DisplayQuotes />
    </div>
  );
}

export default App;
