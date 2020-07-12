import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import ChorumContext from '../../Contexts/ChorumContext';

export default class Header extends React.Component {

     static contextType = ChorumContext;

     handleLogoutClick = () => {
          this.context.setLoginStatus(false)
          TokenService.clearAuthToken()
     };

     renderLoggedInLinks() {
          return (
               <div className='Header_Logged_In'>
                    <Link to='/edit' className='Header_Sub_Item'> Edit Profile </Link>
                    <Link onClick={this.handleLogoutClick} to='/' className='Header_Sub_Item'> Logout </Link>
               </div>
          );
     };

     renderLoggedOutLinks() {
          return (
               <div className='Header_Non_Logged_In'>
                    <Link to='/signup' className='Header_Sub_Item'> Sign Up </Link>
                    {/* <Hyph /> */}
                    <Link to='/login' className='Header_Sub_Item'> Log In </Link>
               </div>
          );
     };

     render() {
          return (
               <header className='App_Header'>
                    <h1><Link to='/' className='App_Header_Link'> Chorum </Link></h1>
                    <h3><Link to='/roster' className='Header_Item'> Artist Roster </Link></h3>
                    {this.context.loggedIn ? this.renderLoggedInLinks() : this.renderLoggedOutLinks()}
               </header>
          );
     };
};