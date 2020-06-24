import React from 'react'
import ArtistApiService from '../services/artist-api-service'
import { Section } from './Utils/Utils'
import ArtistRosterItem from './ArtistRosterItem'

export default class Roster extends React.Component {

     componentDidMount() {
          ArtistApiService.getArtists()
               .then(this.context.setArtistRoster)
               .then(this.context.setError)
          // quick fetch, replace with config variable
          // fetch('http://localhost:8000/artists')
          // .then(res => res.json())
          // .then(data => console.log(data))
     }

     renderArtists() {
          const { artistRoster = [] } = this.context
          return artistRoster.map(artist =>
               <ArtistRosterItem
                    key={artist.artist_id}
                    artist={artist} />
          )
     }

     render() {
          const { error } = this.context
          return (
               <>
                    <h2>Roster</h2>
                    <Section list className='Full_Artist_Roster'>
                         {error
                              ? <p className='Red_Alert'>There was an error, try again</p>
                              : this.renderArtists()}
                    </Section>
               </>
          )
     }
}