import React from 'react';
import ArtistApiService from '../services/artist-api-service';
import ArtistListContext from '../Contexts/artist-list-context';
import ArtistRosterItem from '../Components/ArtistRosterItem';
import { Section } from '../Components/Utils/Utils';

export default class Roster extends React.Component {

     static contextType = ArtistListContext

     componentDidMount() {
          this.context.clearError()
          ArtistApiService.getArtists()
               .then(this.context.setArtistList)
               .catch(this.context.setError)
     }

     renderArtists() {
          const { artistList = [] } = this.context
          return artistList.map(artist =>
               <ArtistRosterItem
                    key={artist.artist_id}
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