import React from "react";

class App extends React.Component {
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
        // console.log(result.results[0].gender);
        // console.log(result.data[0]);
        this.setState({
          items: result.data,
        });
      });
  }

  render() {
    return (
      <>
        <div>
          {this.state.items.map((data) => {
            return (
              <div key={data._id}>
                <p>{data.quoteText}</p>
                {/* <p>{data.name.last}</p> */}
              </div>
            );
          })}
          {/* {this.state.items} */}
        </div>
      </>
    );
  }
}
export default App;
