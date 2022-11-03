export interface Playlist {
  tracks: {
    items: {
      track: Track
    }[]
  }
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
  price?: number
  tracks?: Track[]
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
  id: string
}

export interface AlbumsData {
  albums: Album[]
}

export interface AlbumInBag extends Album {
  quantity: number
}

export interface BagData {
  albumsBag: AlbumInBag[]
  deleteAlbum: (albumId: string) => void
  increaseAlbumQuantity: (album: AlbumInBag) => void
  decreaseAlbumQuantity: (albumId: string) => void
  bagTotalPrice: number
  bagTotalQuantity: number
}

export type RootStackParamList = {
  AlbumSelection: undefined
  Bag: undefined
  AlbumDetails: { album: Album } | undefined
}
