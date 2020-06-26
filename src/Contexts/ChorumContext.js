import React from 'react';

const ChorumContext = React.createContext({
     loggedIn: false,
     artists: [],
     setArtists: () => {}
})

export default ChorumContext;