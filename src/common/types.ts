export interface Vinyl {
  id: number
  title: string
  author: string
  releaseYear: number
  genres: string[]
  cover: string
  price: number
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
