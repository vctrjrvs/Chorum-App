import React from 'react'

export default class Search extends React.Component {
     render() {
          return (
               <form className='Search-Form'>
                    <label htmlFor='Search-Input'>Enter your search term(s)</label><br/>
                    <input className='Search-Input' type='text' placeholder='Search'></input>
                    <button type='submit' className='Search-Submit' value='Submit'>Submit</button>
               </form>
          )
     }
}