import { Artist } from '../common/types'

export const getArtistsNames = (artists: Artist[]): string =>
  artists.map((artist) => artist.name).join(', ')
