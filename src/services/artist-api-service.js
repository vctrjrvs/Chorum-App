// import TokenService from '../services/token-service'
import config from '../config'

const ArtistApiService = {
  getArtists() {
    return fetch(`${config.API_ENDPOINT}/api/artists`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getArtist(id) {
    return fetch(`${config.API_ENDPOINT}/api/artists/${id}`, {
      headers: {
        // 'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ArtistApiService