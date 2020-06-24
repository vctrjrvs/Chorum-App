import React from 'react';
import ArtistRoster from '../Components/ArtistRoster'

export default class Roster extends React.Component {
     render() {
          return (
               <div className='Roster_Container'>
                    <section className='Full_Artist_Roster'>
                         <ArtistRoster />
                    </section>
               </div>
          )
     }
}