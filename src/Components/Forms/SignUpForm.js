import React from 'react';
import { Button, Input, Required, Textarea } from '../Utils/Utils';
import AuthApiService from '../../Services/auth-api-service';

export default class SignUpForm extends React.Component {
     static defaultProps = {
          onSignUpSuccess: () => { }
     };

     state = { error: null };

     handleSubmit = ev => {
          ev.preventDefault();
          const { username, user_email, password, location, genre, artist_name, about, associated_acts, headline } = ev.target;

          this.setState({ error: null });
          AuthApiService.postUser({
               username: username.value,
               password: password.value,
               user_email: user_email.value,
               location: location.value,
               genre: genre.value,
               artist_name: artist_name.value,
               about: about.value,
               associated_acts: associated_acts.value,
               headline: headline.value
          })
               .then(user => {
                    username.value = ''
                    user_email.value = ''
                    password.value = ''
                    location.value = ''
                    genre.value = ''
                    artist_name.value = ''
                    about.value = ''
                    associated_acts.value = ''
                    headline.value = ''
                    this.props.onSignUpSuccess()
               })
               .catch(res => {
                    this.setState({ error: res.error })
               });
     };

     render() {
          const { error } = this.state;
          return (
               <form className='Chorum_SignUp_Form' onSubmit={this.handleSubmit}>

                    <div role='alert'> {error && <p className='Red_Alert'> error </p>} </div>

                    <fieldset className='SignUp_Form'>

                         <legend>Sign Up</legend>

                         <label htmlFor='user_email'> Email <Required /> </label>
                         <Input type='email' placeholder='Email' name='user_email' id='user_email' required />

                         <label htmlFor='user_password'> Password <Required /> </label>
                         <Input type='password' placeholder='Password' name='password' id='user_password' required />

                         <label htmlFor='username'> Username <Required /> </label>
                         <Input type='username' placeholder='Username' name='username' id='username' required />

                         {/* <label htmlFor='user_Type'> Please select your user type: <Required /> </label>
                         <select name='user_Type' id='user_Type_Select'>
                              <option value='Artist'>Artist</option>
                              <option value='Fan'>Fan</option>
                         </select> */}

                         <label htmlFor='Artist_Name'> Artist Name <Required /> </label>
                         <Input type='artist_name' placeholder='Artist Name' name='artist_name' id='artist_name' required />

                         <label htmlFor='Genre'> Genre <Required /> </label>
                         <Input type='genre' placeholder='Genre' name='genre' id='genre' required />

                         <label htmlFor='User_Location'> Location <Required /> </label>
                         <Input type='location' placeholder='Location' name='location' id='location' required />

                         <label htmlFor='User_Headline'> Headline <Required /> </label>
                         <Input type='headline' placeholder='Headline' name='headline' id='headline' required />

                         <label htmlFor='User_About'> About <Required /> </label>
                         <Textarea type='about' placeholder='About' name='about' id='about' required />

                         <label htmlFor='User_Associated'> Associated Acts <Required /> </label>
                         <Input type='associated_acts' placeholder='Associated Acts' name='associated_acts' id='associated_acts' required />

                         <Button type='submit'> Submit </Button>

                    </fieldset>

               </form>
          );
     };
};