import React, { Component } from 'react'
import ArtistApiService from '../services/artist-api-service'
import { Section } from '../Components/Utils/Utils'
import ChorumContext from '../Contexts/ChorumContext'

export default class ArtistPage extends Component {
  state = {
    artist: null
  }

  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ChorumContext

  componentDidMount() {
    const artist = this.props.artistId
    console.log(this.props)
    // this.context.clearError()
    ArtistApiService.getArtist(artist)
      .then(thisArtist => {
        this.setState({
          artist: thisArtist
        })
      })
      .catch(this.context.setError)
  }

  // componentWillUnmount() {
  //   this.context.clearArtist()
  // }

  renderArtist() {
    const { artist } = this.state
    return <>
      <h2 className='Artist_Name'>{ artist.name }</h2>
      <h3 className='Artist_Location'>Location: { artist.location }</h3>
      <h3 className='Artist_Genre'>Genre(s): { artist.genre }</h3>
      <h3 className='Artist_About'>About: { artist.about }</h3>
    </>
  }

  render() {
    const { error } = this.context
    let content
    if (error) {
      content = (error.error === `Artist doesn't exist`)
        ? <p className='Red_Alert'>Artist not found</p>
        : <p className='Red_Alert'>There was an error</p>
    } else if (!this.state.artist) {
      content = <div className='loading' />
    } else {
      content = this.renderArtist()
    }
    return (
      <Section className='ArtistPage'>
        {content}
      </Section>
    )
  }
}

// function ArtistContent({ artist }) {
//   return (
//     <p className='Artist_Profile_Content'>
//       {artist.content}
//     </p>
//   )
// }