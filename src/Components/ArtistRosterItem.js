  
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArtistRosterItem extends Component {
  render() {
    const { artist } = this.props
    return (
         <>
      <Link to={`/artist/${artist.artist_id}`} className='ArtistRosterItem'>
          <h3 className='ArtistRosterItem__heading'>
            {artist.artist_name}
          </h3>
      </Link>        
          </>)
          }
     }