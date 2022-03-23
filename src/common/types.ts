export interface IVinyl {
  id: number
  title: string
  author: string
  releaseYear: number
  genres: string[]
  cover: string
  rating: number
  price: number
  quantity?: number
}

export interface IBagContext {
  vinylInBag: IVinyl[]
  addVinyl: (vinyl: IVinyl) => void
  deleteVinyl: (id: number) => void
  bagTotalPrice: number
  bagTotalQuantity: number
}

export interface IVinylContext {
  vinyl: IVinyl[]
  getVinylById: (id: number) => IVinyl | undefined
}

export type RootStackParamList = {
  VinylSelection: undefined
  Bag: undefined
  VinylDetails: { id: number } | undefined
}
