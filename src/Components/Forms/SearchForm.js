import React from 'react'
// import ChorumContext from '../../../ChorumContext'

export default class Search extends React.Component {
     render() {
          return (
               <form className='Chorum_Search'>
                    <label htmlFor='Search_Input'>Enter your search term(s)</label><br />
                    <input className='Search_Input' type='text' placeholder='Search'></input>
                    <button type='submit' className='Search_Submit' value='Submit'>Submit</button>
               </form>
          )
     }
}