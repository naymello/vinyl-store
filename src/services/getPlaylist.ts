import { spotifyEndpoint, spotifyAuthToken } from '../utils/constants'
import { Playlist } from '../common/types'

export const getPlaylist = async (
  id: string
): Promise<Playlist | undefined> => {
  try {
    const response = await fetch(`${spotifyEndpoint}/playlists/${id}`, {
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
