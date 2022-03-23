export interface IVinyl {
  id: number
  title: string
  author: string
  releaseYear: number
  genres: string[]
  cover: string
  rating: number
  price: number
}

export interface IBagContext {
  vinyl: IVinyl[]
  addVinyl: (vinyl: IVinyl) => void
  deleteVinyl: (id: number) => void
}
