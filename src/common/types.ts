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

export interface IVinylControl extends IVinyl {
  deleteVinyl: (id: number) => void
}

export interface IBagContext {
  vinylInBag: IVinyl[]
  addVinyl: (vinyl: IVinyl) => void
  deleteVinyl: (id: number) => void
  getBagTotal: () => number
}
