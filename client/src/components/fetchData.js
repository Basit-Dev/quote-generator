import React from "react";
import RandomHeader from "./header/HeaderRandom";
import SyncImage from "../images/sync_black.svg";
import Quotes from "../components/quoteCard/Quotes";
class FetchData extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.data,
        });
      });
  }

  dataMap = () =>
    this.state.items.map((data) => {
      return (
        <div key={data._id}>
          <q>{data.quoteText}</q>
        </div>
      );
    });

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
