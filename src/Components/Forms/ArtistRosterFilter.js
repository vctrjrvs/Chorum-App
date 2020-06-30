import React from 'react';
import { Input } from '../../Components/Utils/Utils';
import ChorumContext from '../../Contexts/ChorumContext';

export default class ArtistRosterFilter extends React.Component {

     state = {
          searchTerm: ''
     }

     static contextType = ChorumContext

     render() {

          return (
               <form className='Artist_Roster_Filter'>
                    <label htmlFor='Artist_Roster_Filter'>Filter By Artist</label>
                    <Input 
                         className='Artist_Roster_Filter_Input' 
                         type='text' 
                         placeholder='Search' 
                         id='Artist_Roster_Filter' 
                         value={this.state.searchTerm} 
                         onChange={e => this.setState({searchTerm: e.target.value})} 
                    />
               </form>
          )
     }
}