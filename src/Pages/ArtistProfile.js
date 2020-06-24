import React, { Component } from 'react'
import ArtistContext from '../Contexts/artist-context'
import ArtistApiService from '../services/artist-api-service'
import { Section } from '../Components/Utils/Utils'

export default class ArtistPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ArtistContext

  componentDidMount() {
    const { ArtistId } = this.props.match.params
    this.context.clearError()
    ArtistApiService.getArtist(ArtistId)
      .then(this.context.setArtist)
      .catch(this.context.setError)
  }

//   componentWillUnmount() {
//     this.context.clearArtist()
//   }

  renderArtist() {
    const { artist } = this.context
    return (
         <>
      <h2>{ artist.artist_name }</h2>
      <ArtistContent artist={ artist } />
      </>
    )
  }

  render() {
    const { error, Artist } = this.context
    let content
    if (error) {
      content = (error.error === `Artist doesn't exist`)
        ? <p className='red'>Artist not found</p>
        : <p className='red'>There was an error</p>
    } else if (!Artist.id) {
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

function ArtistContent({ artist }) {
  return (
    <p className='Artist_Profile_Content'>
      {artist.content}
    </p>
  )
}