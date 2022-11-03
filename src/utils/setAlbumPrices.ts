import { Album } from '../common/types'

export const setAlbumPrices = (albums: Album[]): Album[] => {
  const albumsPriced = albums.map((album) => ({
    ...album,
    price: album.tracks?.length! * 5 + 9.99,
  }))

  return albumsPriced
}
