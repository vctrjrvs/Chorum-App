import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../Images/avatar.png'

export default class ArtistRosterItem extends Component {
  render() {
    const { artist } = this.props;
    return (
      <div className='Artist_Roster_Item_Container'>
        <img className='Artist_Roster_Photo' src={placeholder} alt='placeholder'></img>
        <Link to={`/artist/${artist.id}`} className='Artist_Roster_Item'>
          <h3 className='Artist_Roster_Name_Heading'>
            {artist.artist_name}
          </h3>
          <h4 className='Artist_Roster_Location_Heading'>
            {artist.location}
          </h4>
        </Link>
      </div>
    );
  };
};