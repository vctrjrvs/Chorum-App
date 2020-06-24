import React from 'react'
import Logo from '../Components/Logo'
import LoginSignUpCorner from '../Components/LoginSignUpCorner'
import Search from '../Components/Forms/SearchForm/SearchForm'

export default class HomePage extends React.Component {
     render() {
          return (
               <div className='Home_Container'>
                    <LoginSignUpCorner />
                    <Logo />
                    <Search />
               </div>
          )
     }
}