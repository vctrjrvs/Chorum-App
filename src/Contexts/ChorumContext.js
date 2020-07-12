import React from 'react';

const ChorumContext = React.createContext({
     loggedIn: false,
     setLoginStatus: () => { },
     artists: [],
     setArtists: () => { },
     searchTerm: '',
});

export default ChorumContext;