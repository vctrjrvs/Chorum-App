import React from 'react';
import Logo from '../Components/Logo';
import { Section } from '../Components/Utils/Utils';

export default class HomePage extends React.Component {
     render() {
          return (
               <div className='Home_Container'>
                    <Logo />
                    <Section className='About_The_App'>
                         <h3 className='ATA_Header'>
                              Welcome to Chorum!
                         </h3>
                         <p className='ATA_Blurb'>
                              Chorum is a site for musicians who want to better control the flow of information about themselves and their art. Check out the Roster page listed above and search for your favorites, or sign up!
                         </p>
                    </Section>
               </div>
          );
     };
};