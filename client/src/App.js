import React from "react";
import RandomHeader from "./components/header/HeaderRandom";
import DisplayQuotes from "./components/quoteCard/Quotes";
import SyncImage from "./images/sync_black.svg";
import FetchData from "./components/fetchData";

function App() {
  const getRandomQuote = () => {
    return {FetchData};
  };
  return (
    <div className="container">
      <RandomHeader handleClick={getRandomQuote} image={SyncImage} />
      <DisplayQuotes />
      <FetchData />
    </div>
  );
}

export default App;
 