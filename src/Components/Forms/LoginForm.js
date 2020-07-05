import React from 'react';
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import { Button, Input } from '../Utils/Utils'

export default class LoginForm extends React.Component {

     static defaultProps = {
          onLoginSuccess: () => { }
     }

     state = { error: null }

     handleSubmitJWTAuth = ev => {
          ev.preventDefault()
          this.setState({ error: null })
          const { username, password } = ev.target

          AuthApiService.postLogin({
               username: username.value,
               password: password.value
          })
               .then(res => {
                    username.value = ''
                    password.value = ''
                    TokenService.saveAuthToken(res.authToken)
                    this.props.onLoginSuccess()
               })
               .catch(res => {
                    this.setState({ error: res.error })
               })
     }

     render() {
          const { error } = this.state
          return (
               <form className='Login_Form' onSubmit={this.handleSubmitJWTAuth}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>

                    <fieldset className='Login_Form'>

                         <legend>Log In</legend>

                         <label htmlFor='Login_Form_Username'> Username </label>

                         <Input placeholder='Username' name='username' id='Login_Form_Username' required />

                         <label htmlFor='Login_Form_User_Password'> Password </label>

                         <Input type='password' placeholder='Password' name='password' id='User_Password' required />

                         <Button type='submit'> Log In </Button>
                    </fieldset>
               </form>
          )
     }
}