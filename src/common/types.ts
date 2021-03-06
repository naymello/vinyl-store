export interface IVinyl {
  id: number
  title: string
  author: string
  releaseYear: number
  genres: string[]
  cover: string
  price: number
}

export interface IVinylInBag extends IVinyl {
  quantity: number
}

export interface IBagContext {
  vinylInBag: IVinylInBag[]
  addVinyl: (vinyl: IVinyl) => void
  deleteVinyl: (id: number) => void
  changeVinylQuantity: (id: number, mode: 'increase' | 'decrease') => void
  bagTotalPrice: number
  bagTotalQuantity: number
}

export interface IVinylContext {
  vinyl: IVinyl[]
  getVinylById: (id: number) => IVinyl
}

export type RootStackParamList = {
  VinylSelection: undefined
  Bag: undefined
  VinylDetails: { id: number } | undefined
}
