import { Album, Playlist } from '../common/types'
import { setAlbumPrices } from './setAlbumPrices'

export const getAlbumsFromPlaylist = (
  playlist: Playlist | undefined
): Album[] => {
  if (!playlist) return []

  const tracks = playlist.tracks.items.map((item) => item.track)

  const albumsTable: { [key: string]: Album } = {}

  for (const track of tracks) {
    if (!albumsTable[track.album.id]) {
      albumsTable[track.album.id] = { ...track.album, tracks: [] }
    }
    albumsTable[track.album.id].tracks?.push(track)
  }

  const albumsUnpriced = Object.values(albumsTable)

  const albums = setAlbumPrices(albumsUnpriced)

  return albums
}
