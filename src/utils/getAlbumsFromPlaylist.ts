import { Album, Playlist } from '../common/types'

export const getAlbumsFromPlaylist = (
  playlist: Playlist | undefined
): Album[] => {
  if (!playlist) return []

  const tracks = playlist.tracks.items.map((item) => item.track)

  const albumsTable: { [key: string]: Album } = {}

  for (const track of tracks) {
    if (!albumsTable[track.album.id]) {
      albumsTable[track.album.id] = { ...track.album, tracks: [{ ...track }] }
    }
    albumsTable[track.album.id].tracks?.push(track)
  }

  const albums = Object.values(albumsTable)

  return albums
}
