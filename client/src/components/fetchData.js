import React from 'react'
import RandomHeader from './header/HeaderRandom'
import SyncImage from '../images/sync_black.svg'
import Quotes from '../components/quoteCard/Quotes'
class FetchData extends React.Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }
  componentDidMount() {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.data,
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <Quotes displayQuote={`Error: ${error.message}`} />
    } else if (!isLoaded) {
      return <Quotes displayQuote={'...Loading'} />
    } else {
      return (
        <>
          <RandomHeader
            handleClick={() => this.componentDidMount()}
            image={SyncImage}
          />
          {items.map(data => (
            <Quotes
              key={data.id}
              displayQuote={data.quoteText}
              quoteAuthor={data.quoteAuthor}
              quoteGenre={data.quoteGenre}
            />
          ))}
        </>
      )
    }
  }
}
export default FetchData
