import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ChorumContext from './Contexts/ChorumContext';
import Routes from './Routes'

import './App.css';
import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service';
import IdleService from './services/idle-service';

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
      hasError: false,
      artists: []
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  componentDidMount() {
    /* set the function (callback) to call when a user goes idle. we'll set this to logout a user when they're idle */
    IdleService.setIdleCallback(this.logoutFromIdle)

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /* tell the idle service to register event listeners. the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners, the idleCallback (logout) will be invoked */
      IdleService.regiserIdleTimerResets()
      /* Tell the token service to read the JWT, looking at the exp value and queue a timeout just before the token expires */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timeout will call this callback just before the token expires */
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    /* when the app unmounts, stop the event listeners that auto logout (clear the token from storage) */
    IdleService.unRegisterIdleResets()
    /* and remove the refresh endpoint request */
    TokenService.clearCallbackBeforeExpiry()
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken()
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry()
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets()
    /* react won't know the token has been removed from local storage, so we need to tell React to rerender */
    this.forceUpdate()
  }

  setArtists = artists => {
    console.log(artists)
    this.setState({ artists })
  }

  render() {
    // if (this.state.hasError) {
    //   throw new Error('Error')
    // }
    return (
      <ChorumContext.Provider value={{
        artists: this.state.artists,
        setArtists: this.setArtists
      }} >
        <div className='App'>
          <header>
            <Link to='/' className='App_Header_Link'> Chorum </Link>
          </header>
          <main className='App_Main'>
            {this.state.hasError && <p className='Red_Alert'>We're sorry, you've encountered an error!</p>}
            <Routes />
          </main>
          <footer className='App_Footer'>
            <ul className='Footer_List'>
              {/* Links to various legal/info-based pages */}
              <Link to='/roster' className='Footer_Item'> Artist Roster </Link>
              <Link to='/terms' className='Footer_Item'> Terms Of Use </Link>
              <Link to='/privacy' className='Footer_Item'> Privacy </Link>
              <Link to='/copyright' className='Footer_Item'> Copyright </Link>
            </ul>
          </footer>
        </div>
      </ChorumContext.Provider>
    );
  }
}
