import React from 'react';
import { Button, Input, Required, Textarea } from '../Utils/Utils';
import AuthApiService from '../../Services/auth-api-service'
import TokenService from '../../Services/token-service';

import config from '../../config';
import ChorumContext from '../../Contexts/ChorumContext';


export default class EditForm extends React.Component {
     static defaultProps = {
          onEditSuccess: () => { },
          handleClickCancel: () => { }
     }

     static contextType = ChorumContext;

     state = {
          error: null,
          id: '',
          artist_name: '',
          genre: '',
          location: '',
          about: '',
          associated_acts: '',
          headline: ''
     };

     componentDidMount() {
          fetch(config.API_ENDPOINT + '/api/users', {
               method: 'GET',
               headers: {
                    'authorization': `Bearer ${TokenService.getAuthToken()}`
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
                         location: responseData.location,
                         about: responseData.about,
                         associated_acts: responseData.associated_acts,
                         headline: responseData.headline
                    })
               })
               .catch(error => {
                    console.error(error)
                    this.setState({ error })
               })
     }

     handleSubmit = ev => {
          ev.preventDefault()
          const { location, genre, artist_name, about, associated_acts, headline } = ev.target

          this.setState({ error: null })
          AuthApiService.updateUser({
               location: location.value,
               genre: genre.value,
               artist_name: artist_name.value,
               about: about.value,
               associated_acts: associated_acts.value,
               headline: headline.value
          })
               .then(user => {
                    location.value = ''
                    genre.value = ''
                    artist_name.value = ''
                    about.value = ''
                    associated_acts.value = ''
                    headline.value = ''
                    this.props.onEditSuccess()
               })
               .then()
               .catch(res => {
                    this.setState({ error: res.error })
               })
     }

     render() {

          const { error, id, artist_name, genre, location, about, associated_acts, headline } = this.state
          const user = { id, artist_name, genre, location, about, associated_acts, headline }
          return (
               <form className='Chorum_Edit_Form' onSubmit={this.handleSubmit} user={user}>
                    <div role='alert'> {error && <p className='Red_Alert'> {error.message} </p>} </div>
                    <fieldset className='Chorum_Edit_Form'>

                         <legend>Edit Profile</legend>

                         <label htmlFor='Artist_Name'> Artist Name <Required /> </label>
                         <Input type='artist_name' name='artist_name' id='artist_name' defaultValue={this.state.artist_name} required />

                         <label htmlFor='Genre'> Genre <Required /> </label>
                         <Input type='genre' name='genre' id='genre' defaultValue={this.state.genre} required />

                         <label htmlFor='User_Location'> Location <Required /> </label>
                         <Input type='location' name='location' id='location' defaultValue={this.state.location} required />

                         <label htmlFor='About'> About </label>
                         <Textarea type='about' name='about' id='about' defaultValue={this.state.about} required />

                         <label htmlFor='Headline'> Headline </label>
                         <Input type='headline' name='headline' id='headline' defaultValue={this.state.headline} required />

                         <label htmlFor='Associated'> Associated Acts </label>
                         <Input type='associated_acts' name='associated_acts' id='associated_acts' defaultValue={this.state.associated_acts} required />

                         <Button type='submit'> Submit </Button>

                         <Button type='reset' onClick={this.props.handleClickCancel}> Cancel </Button>

                    </fieldset>
               </form>
          )
     }
}