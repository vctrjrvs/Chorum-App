import React from 'react';
import { Link } from 'react-router-dom';
import ChorumContext from '../../Contexts/ChorumContext';

//home-sidebar

export default class Sidebar extends React.Component {

     static contextType = ChorumContext;

     render() {
          return (
               <section className='Secondary_Navbar'>
                    <h3><Link to='/' className='Secondary_Navbar_Link'>Home</Link></h3>
                    <h3><Link to='/roster' className='Secondary_Navbar_Link'>Full Artist Roster</Link></h3>
                    <h3><Link to='/about' className='Secondary_Navbar_Link'>About Chorum</Link></h3>
                    <h3><Link to='/team' className='Secondary_Navbar_Link'>Meet The Team</Link></h3>
                    {/* <h3><Link to='' className='Secondary_Navbar_Link'>Random Page</Link></h3> */}
               </section>
          );
     };
}