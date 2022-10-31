export interface Vinyl {
  id: number
  title: string
  author: string
  releaseYear: number
  genres: string[]
  cover: string
  price: number
}

export interface Artist {
  name: string
  id: string
}

export interface Album {
  album_type: string
  artists: Artist[]
  id: string
  images: AlbumCover[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: string
  type: string
}

export interface AlbumCover {
  height: number
  url: string
  width: number
}

export interface Track {
  album: Album
  name: string
  preview_url: string
  track: boolean
  track_number: number
  type: string
}

export interface VinylBag extends Vinyl {
  quantity: number
}

export interface BagData {
  vinylInBag: VinylBag[]
  addVinyl: (vinyl: Vinyl) => void
  deleteVinyl: (id: number) => void
  changeVinylQuantity: (id: number, mode: 'increase' | 'decrease') => void
  bagTotalPrice: number
  bagTotalQuantity: number
}

export interface VinylData {
  vinyl: Vinyl[]
  getVinylById: (id: number) => Vinyl
}

export type RootStackParamList = {
  VinylSelection: undefined
  Bag: undefined
  VinylDetails: { id: number } | undefined
}
