import React from 'react';
import ArtistApiService from '../services/artist-api-service';
import ArtistRosterItem from '../Components/ArtistRosterItem';
import { Section } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';

export default class Roster extends React.Component {

     static contextType = ChorumContext

     componentDidMount() {
          // this.context.clearError()
          ArtistApiService.getArtists()
               .then(this.context.setArtists)
               // .catch(this.context.setError)
     }

     renderArtists() {
          const { artists = [] } = this.context
          return artists.map(artist =>
               <ArtistRosterItem
                    key={artist.name}
                    artist={artist}
               />
          )
     }

     render() {
          const { error } = this.context
          return (
               <Section list className='Artist_Roster_Page'>
                    {error
                         ? <p className='Red_Alert'>There was an error, please try again</p>
                         : this.renderArtists()}
               </Section>
          )
     }
}