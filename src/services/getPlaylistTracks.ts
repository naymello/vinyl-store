import { spotifyEndpoint, spotifyAuthToken } from '../utils/constants'
import { Track } from '../common/types'

const playlistId = '761BfN8cdi1Eqq4Jl4gR21'

export const getPlaylistTracks = async (): Promise<Track[]> => {
  const response = await fetch(`${spotifyEndpoint}/playlists/${playlistId}`, {
    headers: {
      Accept: 'application/json',
      Authorization: spotifyAuthToken,
      'Content-Type': 'application/json',
    },
  })
  const playlist = await response.json()
  const tracks = playlist.tracks.items

  return tracks
}
