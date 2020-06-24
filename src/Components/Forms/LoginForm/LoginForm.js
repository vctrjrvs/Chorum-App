import React from 'react';
import TokenService from '../../../services/token-service'
import AuthApiService from '../../../services/auth-api-service'

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

                         <label
                              htmlFor='Login_Form_User_Email'>
                              Email
                         </label>

                         <input
                              type='email'
                              placeholder='Email'
                              name='User_Email'
                              id='User_Email'
                              required
                         />

                         <label
                              htmlFor='Login_Form_User_Password'>
                              Password
                         </label>

                         <input
                              type='password'
                              placeholder='Password'
                              name='User_Password'
                              id='User_Password'
                              required />

                         <button
                              type='submit'>
                              Log In
                         </button>
                    </fieldset>
               </form>
          )
     }
}