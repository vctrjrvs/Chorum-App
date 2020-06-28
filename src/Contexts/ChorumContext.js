import React from 'react';

const ChorumContext = React.createContext({
     loggedIn: false,
     setLoginStatus: () => {},
     artists: [],
     setArtists: () => {}
})

export default ChorumContext;