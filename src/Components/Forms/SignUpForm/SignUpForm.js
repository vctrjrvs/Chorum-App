import React from 'react';

export default class SignUpForm extends React.Component {
     render() {
          return (
               <form className='Chorum_SignUp'>
                    <fieldset>
                         <legend>Sign Up</legend>
                         <label htmlFor='User_Email'>Email</label>
                         <input type='email' placeholder='Email' name='User_Email' id='User_Email' required />
                         <label htmlFor='User_Password'>Password</label>
                         <input type='password' placeholder='Password' name='User_Password' id='User_Password' required />
                         <label htmlFor='User_Confirm_Password'>Confirm Password</label>
                         <input type='password' placeholder='Confirm Password' name='User_Confirm_Password' id='User_Confirm_Password' required />
                         <label htmlFor='User_Type'>Please select your user type:</label>
                         <select name='User_Type' id='User_Type_Select'>
                              <option value='Artist'>Artist</option>
                              <option value='Fan'>Fan</option>
                         </select>
                         <button type='submit'>Submit</button>
                    </fieldset>
               </form>
          )
          }
}