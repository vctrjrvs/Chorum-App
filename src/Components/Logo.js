import React from 'react';
import ChorumLogo from '../Images/ChorumLogo.png';

export default class Logo extends React.Component {
     render() {
          return (
               <div className='Home_Logo_Container'>
                    <img className='Home_Logo' src={ChorumLogo} alt='Chorum Logo'></img>
               </div>
          );
     };
};