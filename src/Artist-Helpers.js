
export const findArtist = (artists=[], artistId) =>
artists.find(artist => artist.id === Number(artistId))

export const getartistsForRoster = (artists=[], rosterId) => (
(!rosterId)
  ? artists
  : artists.filter(artist => artist.roster_id === rosterId)
)

export const countartistsForRoster = (artists=[], rosterId) =>
artists.filter(artist => artist.roster_id === rosterId).length