import React from 'react';
import TokenService from '../../../services/token-service'
import AuthApiService from '../../../services/auth-api-service'
import { Button, Input } from '../../Utils/Utils'

export default class LoginForm extends React.Component {

     static defaultProps = {
          onLoginSuccess: () => { }
     }

     state = { error: null }

     handleSubmitBasicAuth = (ev) => {
          ev.preventDefault()
          const { user_name, password } = ev.target

          user_name.value = ''
          password.value = ''
          this.props.onLoginSuccess()
     }

     handleSubmitJWTAuth = ev => {
          ev.preventDefault()
          this.setState({ error: null })
          const { user_name, password } = ev.target

          AuthApiService.postLogin({
               user_name: user_name.value,
               password: password.value
          })
               .then(res => {
                    user_name.value = ''
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
               <form
                    className='Login_Form'
                    onSubmit={this.handleSubmitJWTAuth}
               >
                    <div role='alert'>
                         { error && <p className='Red_Alert'> { error } </p>}
                    </div>

                    <fieldset>

                         <legend>Log In</legend>

                         <label htmlFor='Login_Form_Username'>
                              Username
                         </label>

                         <Input
                              placeholder='Username'
                              name='Username'
                              id='Login_Form_Username'
                              required
                         />

                         <label htmlFor='Login_Form_User_Password'>
                              Password
                         </label>

                         <Input
                              type='password'
                              placeholder='Password'
                              name='User_Password'
                              id='User_Password'
                              required />

                         <Button type='submit'>
                              Log In
                         </Button>
                    </fieldset>
               </form>
          )
     }
}