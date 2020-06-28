import React from  'react';
import PropTypes from 'prop-types';
import config from '../config'
import EditUserForm from '../EditUserForm/EditUserForm'
import ChorumContext from '../Contexts/ChorumContext';

export default class EditUser extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  static contextType = ChorumContext;

  state = {
    error: null,
    id: null,
    artist_name: null,
    genre: null,
    location: null
  };

  componentDidMount() {
    const { userId } = this.props.match.params
    fetch(config.API_ENDPOINT + `/${userId}`, {
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

  handleSubmit = (user, callback) => {
    this.setState({ error: null })
    const { userId } = this.props.match.params
    fetch(config.API_ENDPOINT + `/${userId}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${config.API_KEY}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(error => Promise.reject(error))
      })
      .then(() => {
        callback(callback)
        this.context.updateUser(user)
        this.props.history.push('/')
      })
      .catch(error => {
        console.error(error)
        this.setState({ error })
      })
  }

  handleClickCancel = () => {
    this.props.history.push('/')
  };

  render() {
    const { error, id, artist_name, genre, location } = this.state
    const user = { id, artist_name, genre, location }
    return (
      <section className='Edit_User'>
        <h2>Edit User</h2>
        {id && (
          <EditUserForm
            onSubmit={ this.handleSubmit }
            onCancel={ this.handleClickCancel }
            error={ error }
            user={ user }
          />
        )}
      </section>
    );
  }
}