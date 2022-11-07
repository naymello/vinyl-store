import { Album } from '../common/types'

export const setAlbumPrices = (albums: Album[]): Album[] => {
  const albumsPriced = albums.map((album) => ({
    ...album,
    price: album.tracks?.length! + 19.99,
  }))

  return albumsPriced
}
