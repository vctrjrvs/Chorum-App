import React from 'react';

const ChorumContext = React.createContext({
    folders: [],
    notes: [],
    addingNote: null,
    addingFolder: null,
    toggleAddingFolder: () => {},
    toggleAddingNote: () => {},
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {}
})

export default ChorumContext;