import { spotifyEndpoint, spotifyAuthToken } from '../utils/constants'
import { Track } from '../common/types'

const playlistId = '761BfN8cdi1Eqq4Jl4gR21'

export const getPlaylist = async (): Promise<Track[] | undefined> => {
  try {
    const response = await fetch(`${spotifyEndpoint}/playlists/${playlistId}`, {
      headers: {
        Accept: 'application/json',
        Authorization: spotifyAuthToken,
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    return data
  } catch (err) {
    throw new Error(`An error occurred while fetching the playlist: ${err}`)
  }
}
