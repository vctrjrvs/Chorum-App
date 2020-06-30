import React from 'react';
import ArtistApiService from '../services/artist-api-service';
import ArtistRosterItem from '../Components/ArtistRosterItem';
import { Section, Input } from '../Components/Utils/Utils';
import ChorumContext from '../Contexts/ChorumContext';
// import Search from '../Components/Forms/SearchForm/SearchForm';
// import ArtistRosterFilter from '../Components/Forms/ArtistRosterFilter';
// import { Link } from 'react-router-dom';

export default class Roster extends React.Component {

     state = {
          searchTerm: '',
          artists: []
     }

     static contextType = ChorumContext

     componentDidMount() {
          // this.context.clearError()
          ArtistApiService.getArtists()
               .then(this.context.setArtists)
          // .catch(this.context.setError)
     }

     // renderArtists() {
     //      const { artists = [] } = this.context
     //      if (this.state.searchTerm !== '') {
     //           artists = artists.filter(artist => artist.name.includes(this.state.searchTerm))
     //      } else
     //           return artists.map(artist => <ArtistRosterItem key={artist.name} artist={artist} />)
     // }

     editSearchTerm = (e) => {
          console.log(e.target.value)
          this.setState({
               searchTerm: e.target.value
          })
     }

     // handleFilterChange = () => {
     //      const { artists = [] } = this.context
     //      return artists
     //      .filter(artist => artist
     //           .toLowerCase()
     //           .includes(this.state.searchTerm.toLowerCase()))  
     // }

     render() {
          const { error } = this.context;
          //  artists = this.state.artists;
          let { artists = [] } = this.context

          if (this.state.searchTerm !== '') {
               artists = artists.filter(artist => artist.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
          } 

          return (
               <>
                    <form className='Artist_Roster_Filter'>
                         <label htmlFor='Artist_Roster_Filter'>Filter By Artist</label>
                         <Input
                              className='Artist_Roster_Filter_Input'
                              type='text'
                              placeholder='Search'
                              id='Artist_Roster_Filter'
                              value={this.state.searchTerm}
                              onChange={e => this.setState({ searchTerm: e.target.value })}
                         />
                    </form>

                    <Section list className='Artist_Roster_Page'>
                         { error ? <p className='Red_Alert'>There was an error, please try again</p> : artists.map(artist => <ArtistRosterItem key={artist.name} artist={artist}/>) }
                         {/* {error ? <p className='Red_Alert'>There was an error, please try again</p> : this.renderArtists()} */}
                    </Section>

               </>
          )
     }
}