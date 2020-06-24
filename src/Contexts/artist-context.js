import React, { Component } from 'react'

export const artist = { }

const ArtistContext = React.createContext({
  artist: {},
  error: null,
  setError: () => {},
  clearError: () => { },
  setArtist: () => {},
})

export default ArtistContext

export class ArtistProvider extends Component {
  state = {
    artist: {},
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setArtist = artist => {
    this.setState({ artist })
  }

  render() {
    const value = {
      artist: this.state.artist,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArtist: this.setArtist,
    }
    return (
      <ArtistContext.Provider value={value}>
        {this.props.children}
      </ArtistContext.Provider>
    )
  }
}