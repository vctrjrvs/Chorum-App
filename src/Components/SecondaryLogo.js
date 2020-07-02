import React from 'react'
import ChorumLogo from '../Images/ChorumLogo.png';

export default class SecondaryLogo extends React.Component {
     render() {
          return (
               <div className='Secondary_Logo_Container'>
                    <img className='Secondary_Logo' src={ChorumLogo} alt='Chorum Logo'></img>
               </div>
          )
     }
}