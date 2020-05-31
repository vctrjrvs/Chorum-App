import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FeaturedAlbum from './Components/Featured/FeaturedAlbum';
import FeaturedSong from './Components/Featured/FeaturedSong';
import FeaturedArtist from './Components/Featured/FeaturedArtist';
import Search from './Components/Forms/SearchForm/SearchForm';

//Main focus and objective: A hub for musicians to share and promote 
//music/their brand etc, 

//Feature List:
//Header
//Navigation Bar
//Footer
//Sign Up and Log In forms
//Upload Forms - Audio and Video
//Artist, Fan, and Record Label pages
//Merchandise/Purchase Pages
//Policy Page - Privacy, Copyright, Terms Of Service/Use
//'Concert Hall' - Live Streams and Uploads of Live Performances
//Forum for discussion, tips, etc
//Upload Configurator? So everything can be probably set upon inital upload
//Favorites feature for liked songs, albums, etc
//Wish List for music, products, etc
//Lesson/Instruction/Tutorial Pages?



export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Search />

        {/* featured section as a gallery? */}
        <FeaturedArtist />
        <FeaturedAlbum />
        <FeaturedSong />

        {/* footer containing legal stuff */}
        <Footer />
      </div>
    );
  }
}
