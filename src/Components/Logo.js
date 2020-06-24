import React from 'react'
import cardinalplaceholder from '../Images/cardinalplaceholder.png';

export default class Logo extends React.Component {
     render() {
          return (
               <div className='Home_Logo_Container'>
                    <img className='Home_Logo' src={cardinalplaceholder} alt='Chorum Placeholder Logo'></img>
               </div>
          )
     }
}