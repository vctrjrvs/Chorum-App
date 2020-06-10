import React, { Component } from 'react';

import { Route, NavLink } from 'react-router-dom'
import ChorumContext from '../ChorumContext';
import Routes from './Routes'

import './App.css';

import HomePage from './Pages/Home';
import MainPlayer from './Pages/MainPlayer';
import UploadForm from './Pages/UploadForm';
import ProfilePage from './Pages/ProfilePage';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FeaturedAlbum from './Components/Featured/FeaturedAlbum';
import FeaturedSong from './Components/Featured/FeaturedSong';
import FeaturedArtist from './Components/Featured/FeaturedArtist';
import Search from './Components/Forms/SearchForm/SearchForm';

//What does the app do? Provides a hub for independent musicians to share
//and promote music, brand, etc, 

//Custom URL and Favicon
//URL: chorum.me
//Favicon? Logo 

//Works across all different browsers

// Wireframes:
// Home 
// Log In
// Sign Up
// Main Profile 
// Upload Form
// Edit Profile
// Player Page

//Feature List:
//Header
//Navigation Bar
//Footer
//Sign Up and Log In forms
//Upload Forms - Audio and Video
//Artist, Fan, and Record Label pages
//Policy Page - Privacy, Copyright, Terms Of Service/Use
//Favorites feature for liked songs, albums, etc

//USER STORIES
//A new user can sign up for a Chorum account.
//Returning users can log into their Chorum accounts.
//Returning users can access and edit their uploaded items.
//A new/returning user can upload items.
//Users 
//(Songs, images, videos)
//Users can listen to music uploaded to profiles.
//Users can post messages and updates to their accounts.
//Users can follow other users.
//A user can add links to social media profiles.
//A user can share content from their profiles.
//New/returning users can access site policies/information.
//Admins can view all accounts.
//Admins can view all uploaded items.

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      addingUpload: false,
      hasError: false
    }
}

setFeed = (feed) => {
  this.setState({
    feed
  })
}

toggleAddingUpload = () => {
  console.log(`ran toggleAddingUpload`);
  this.setState({
    addingUpload: true
  })
}

toggleHome = () => {
  this.setState({
    addingUpload: false
  })
}

deleteUpload = (uploadId) => {
  const newUploads = this.state.uploads.filter(upload => upload.id !== uploadId)
  this.setState({
    uploads: newUploads
  })
}

  navRoutes() {
    return (
      <>
        {['/', 'folder/:folderId'].map(path => (
          <Route
            exact
            path={path}
            key={path}
            component={HomePage}
          />
        ))}
        <Route
          path='/song/:songId'
          component={MainPlayer}
        />
        <Route
          path='/add-upload'
          component={UploadForm}
        />
      </>
    )
  }

  mainRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact path='/'
            component={HomePage}
          />
        ))}
        <Route
          path='/profile/:userId'
          component={ProfilePage}
        />
        <Route
          path='/add-upload'
          component={UploadForm}
        />        
      </>
    )
  }



  render() {
    const contextValue = {
      uploads: this.state.uploads
    }
    if(this.state.hasError) {
      throw new Error('Error')
    }
    return (
      <div className="App">
        <nav className='App-nav'>
          {this.navRoutes()}
        </nav>
        <header>
            <NavLink to='/' className="header-link" onClick={this.toggleHome}>Chorum</NavLink>
          </header>
        <Header />

        <Search />

        {/* featured section as a gallery? */}
        <FeaturedArtist />
        <FeaturedAlbum />
        <FeaturedSong />

        {/* footer containing legal stuff */}
        <Footer />

        <main>
            <ChorumContext.Provider value={contextValue}>
              <Routes />
            </ChorumContext.Provider>
          </main>
      </div>
    );
  }
}
