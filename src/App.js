import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ChorumContext from './ChorumContext';
import Routes from './Routes'

import './App.css';

// import HomePage from './Pages/HomePage';
// import EditProfilePage from './Pages/EditProfilePage';
// import LoginPage from './Pages/LoginPage';
// import SignUpPage from './Pages/SignUpPage';
// import RosterPage from './Pages/RosterPage';
// import DashboardPage from './Pages/DashboardPage';
// import ResultsPage from './Pages/ResultsPage';

//What does the app do? Provides a hub for independent musicians to share
//and promote music, brand, etc, 

//Custom URL and Favicon
//URL: chorum.me
//Favicon? Logo 

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      hasError: false
    }
  }

  render() {

    if (this.state.hasError) {
      throw new Error('Error')
    }

    return (
      <div className='App'>
        <header>
          <Link to='/'
            className='App_Header_Link'>
            Chorum
            </Link>
        </header>
        {/* <Header /> */}

        {/* footer containing legal stuff */}

        <main className='App_Main'>
          <Routes />
        </main>
        <footer className='App_Footer'>
          <ul className='Footer_List'>
            {/* Links to various legal/info-based pages */}
            <Link
              to='/roster'
              className='Footer_Item'
            >
              Artist Roster
              </Link>
            <Link
              to='/terms'
              className='Footer_Item'
            >
              Terms Of Use
              </Link>
            <Link
              to='/privacy'
              className='Footer_Item'
            >
              Privacy
              </Link>
            <Link
              to='/copyright'
              className='Footer_Item'
            >
              Copyright
              </Link>
          </ul>
        </footer>
      </div>
    );
  }
}
