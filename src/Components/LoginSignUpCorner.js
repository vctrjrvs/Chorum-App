import React from 'react'
// import DVSCLOGO from '../Images/DVSCLOGO.png'
import { Link } from 'react-router-dom'

export default class LoginSignUpCorner extends React.Component {
     render() {
          return (
               <div className='Login_SignUp_Corner_Container'>
                    {/* <img className='Corner_Avatar' src={ DVSCLOGO } alt='DVSC Test Logo'></img> */}
                    <Link to='/login'>Log In</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/edit'>Edit Profile</Link>
               </div>
          )
     }
}