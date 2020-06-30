import React from 'react';
import ChorumContext from './Contexts/ChorumContext';
import Routes from './Routes'

import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service';
import IdleService from './services/idle-service';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import './App.css';

export default class App extends React.Component {
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

  setLoginStatus = status => {
    this.setState({
      loggedIn: status
    })
  }

  render() {
    return (
      <ChorumContext.Provider value={{
        artists: this.state.artists,
        setArtists: this.setArtists,
        loggedIn: this.state.loggedIn,
        setLoginStatus: this.setLoginStatus
      }} >
        <div className='App'>
          <Header />
          <main className='App_Main'>
            {this.state.hasError && <p className='Red_Alert'>We're sorry, you've encountered an error!</p>}
            <Routes />
          </main>
          <Footer />
        </div>
      </ChorumContext.Provider>
    );
  }
}
