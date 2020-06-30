  
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ArtistRosterItem extends Component {
  render() {
    const { artist } = this.props
    return (
         <>
      <Link to={`/artist/${artist.id}`} className='Artist_Roster_Item'>
          <h3 className='Artist_Roster_Name_Heading'>
            {artist.name}
          </h3>
          <h4 className='Artist_Roster_Location_Heading'>
            {artist.location}
          </h4>
      </Link>        
          </>)
          }
     }