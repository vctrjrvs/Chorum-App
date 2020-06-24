import React from 'react';
import { Button, Input, Required } from '../../Utils/Utils';

export default class SignUpForm extends React.Component {
     static defaultProps = {
          onSignUpSuccess: () => { }
     }

     state = { error: null }

     handleSubmit = ev => {
          ev.preventDefault()
          const { username, user_email, password } = ev.target

          console.log('Signup form submitted')
          console.log({ username, user_email, password })

          username.value = ''
          user_email.value = ''
          password.value = ''
          this.props.onSignUpSuccess()
     }

     render() {
          const { error } = this.state
          return (
               <form className='Chorum_SignUp_Form' onSubmit={this.handleSubmit}>
                    <div role='alert'>
                         {error && <p className='red'>{error}</p>}
                    </div>
                    <fieldset>
                         <legend>Sign Up</legend>
                         <label htmlFor='User_Email'>
                              Email <Required />
                         </label>
                         <Input
                              type='email'
                              placeholder='Email'
                              name='User_Email'
                              id='User_Email' required />
                         <label htmlFor='User_Password'>
                              Password <Required />
                         </label>
                         <Input
                              type='password'
                              placeholder='Password'
                              name='User_Password'
                              id='User_Password'
                              required />
                         <label htmlFor='User_Confirm_Password'>
                              Confirm Password <Required />
                         </label>
                         <Input
                              type='password'
                              placeholder='Confirm Password'
                              name='User_Confirm_Password'
                              id='User_Confirm_Password'
                              required />
                         <label htmlFor='Username'>
                              Username <Required />
                         </label>
                         <Input
                              type='Username'
                              placeholder='Username'
                              name='Username'
                              id='Username'
                              required />
                         <label htmlFor='User_Type'>
                              Please select your user type: <Required />
                         </label>
                         <select name='User_Type' id='User_Type_Select'>
                              <option value='Artist'>Artist</option>
                              <option value='Fan'>Fan</option>
                         </select>
                         <Button type='submit'>
                              Submit
                              </Button>
                    </fieldset>
               </form>
          )
     }
}