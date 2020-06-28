import React from 'react';
import ArtistApiService from '../services/artist-api-service';
import ArtistRosterItem from '../Components/ArtistRosterItem';
import { Section } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';
// import Search from '../Components/Forms/SearchForm/SearchForm';
import ArtistRosterFilter from '../Components/Forms/ArtistRosterFilter';

export default class Roster extends React.Component {

     state = {
          searchTerm: ''
     }

     static contextType = ChorumContext

     componentDidMount() {
          // this.context.clearError()
          ArtistApiService.getArtists()
               .then(this.context.setArtists)
               // .catch(this.context.setError)
     }

     renderArtists() {
          const { artists = [] } = this.context
          return artists.map(artist => <ArtistRosterItem key={artist.name} artist={artist} /> )
     }

     editSearchTerm = (e) => {
          console.log(e.target.value)
          this.setState({
               searchTerm: e.target.value
          })
     }

     handleFilterChange = () => {
          const { artists = [] } = this.context
          return artists
          .filter(artist => artist
               .toLowerCase()
               .includes(this.state.searchTerm.toLowerCase()))
          
     }

     render() {
          const { error } = this.context
          return (
               <>
               {/* <Search /> */}

               {/* <input 
               type='text' 
               placeholder='Search' 
               id='Artist_Roster_Filter' 
               value={this.state.searchTerm} 
               onChange={this.editSearchTerm} 
               /> */}
               <ArtistRosterFilter />

               <Section list className='Artist_Roster_Page'>
                    {/* { this.editSearchTerm() ? this.handleFilterChange() : this.renderArtists() } */}
                    { error ? <p className='Red_Alert'>There was an error, please try again</p> : this.renderArtists() }
               </Section>
               </>
          )
     }
}