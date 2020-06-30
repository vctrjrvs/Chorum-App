import React from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service'
import config from '../../config';
import ChorumContext from '../../Contexts/ChorumContext';

export default class EditForm extends React.Component {
     static defaultProps = {
          onEditSuccess: () => { }
     }
      
     static contextType = ChorumContext;
      
        state = {
          error: null,
          id: '',
          artist_name: '',
          genre: '',
          location: ''
        };

     componentDidMount() {
          fetch(config.API_ENDPOINT + '/api/users', {
            method: 'GET',
            headers: {
              'authorization': `Bearer ${config.API_KEY}`
            }
          })
            .then(res => {
              if (!res.ok)
                return res.json().then(error => Promise.reject(error))
      
              return res.json()
            })
            .then(responseData => {
              this.setState({
                id: responseData.id,
                artist_name: responseData.artist_name,
                genre: responseData.genre,
                location: responseData.location
              })
            })
            .catch(error => {
              console.error(error)
              this.setState({ error })
            })
        }

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

     handleClickCancel = () => {
          this.props.history.push('/')
        };

     render() {
          
          const { error, id, artist_name, genre, location } = this.state
          console.log(artist_name, genre, location)
          const user = { id, artist_name, genre, location }
          return (
               <form className='Chorum_Edit_Form' onSubmit={this.handleSubmit} user={ user }>
                    <div role='alert'> { error && <p className='Red_Alert'> { error.message } </p> } </div>
                    <fieldset>

                         <legend>Edit Profile</legend>

                         <label htmlFor='Artist_Name'> Artist Name <Required /> </label>
                         <Input type='artist_name' name='artist_name' id='artist_name' value={artist_name} required />

                         <label htmlFor='Genre'> Genre <Required /> </label>
                         <Input type='genre' name='genre' id='genre' value={genre} required />

                         <label htmlFor='User_Location'> Location <Required /> </label>
                         <Input type='location' name='location' id='location' value={location} required />

                         <Button type='submit'> Submit </Button>

                         <Button type='cancel' onClick={ this.handleClickCancel }> Cancel </Button>

                    </fieldset>
               </form>
          )
     }
}