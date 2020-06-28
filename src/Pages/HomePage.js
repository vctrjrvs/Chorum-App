import React from 'react'
import Logo from '../Components/Logo'
import SearchForm from '../Components/Forms/SearchForm/SearchForm'

export default class HomePage extends React.Component {
     render() {
          return (
               <div className='Home_Container'>
                    <Logo />
                    <SearchForm />
               </div>
          )
     }
}