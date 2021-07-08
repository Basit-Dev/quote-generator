import React from "react";
import RandomHeader from "./header/HeaderRandom";
import SyncImage from "../images/sync_black.svg";
import Quotes from "../components/quoteCard/Quotes";
class FetchData extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  dataMap = () => {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {items.map((data) => (
            <div key={data._id}>
              <q>{data.quoteText}</q>
            </div>
          ))}
        </>
      );
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <RandomHeader
            handleClick={() => this.componentDidMount()}
            image={SyncImage}
          />
          <Quotes data={this.dataMap()} />
        </div>
      </>
    );
  }
}
export default FetchData;
