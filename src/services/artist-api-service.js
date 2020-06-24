import TokenService from '../services/token-service'
import config from '../config'

const ArtistApiService = {
  getArtists() {
    return fetch(`${config.API_ENDPOINT}/artists`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getArtist(artistId) {
    return fetch(`${config.API_ENDPOINT}/artists/${artistId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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