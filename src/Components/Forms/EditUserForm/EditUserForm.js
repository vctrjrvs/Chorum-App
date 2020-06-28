import React from 'react';
import { Button, Input, Required } from '../../Utils/Utils';
import AuthApiService from '../../../services/auth-api-service'

export default class EditForm extends React.Component {
     static defaultProps = {
          onEditSuccess: () => { }
     }

     state = { error: null }

     handleSubmit = ev => {
          ev.preventDefault()
          const { location, genre, artist_name } = ev.target

          console.log('Edit form submitted')
          console.log(location.value, genre.value, artist_name.value)

          this.setState({ error: null })
          AuthApiService.updateUser({
               location: location.value, 
               genre: genre.value, 
               artist_name: artist_name.value
          })
               .then(user => {
                    location.value = ''
                    genre.value = ''
                    artist_name.value = ''
                    this.props.onEditSuccess()
               })
               .catch(res => {
                    this.setState({ error: res.error })
               })
     }

     render() {
          const { error } = this.state
          return (
               <form className='Chorum_Edit_Form' onSubmit={this.handleSubmit}>
                    <div role='alert'> { error && <p className='Red_Alert'> { error } </p>} </div>
                    <fieldset>
                         <legend>Edit Profile</legend>
                         <label htmlFor='Artist_Name'> Artist Name <Required /> </label>
                         <Input type='artist_name' name='artist_name' id='artist_name' required />
                         <label htmlFor='Genre'> Genre <Required /> </label>
                         <Input type='genre' name='genre' id='genre' required />
                         <label htmlFor='User_Location'> Location <Required /> </label>
                         <Input type='location' name='location' id='location' required />
                         <Button type='submit'> Submit </Button>
                    </fieldset>
               </form>
          )
     }
}