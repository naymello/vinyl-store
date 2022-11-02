import { createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPlaylist } from '../services/getPlaylist'
import { getAlbumsFromPlaylist } from '../utils/getAlbumsFromPlaylist'
import { Album } from '../common/types'

export const AlbumsContext = createContext<{ albums: Album[] } | null>(null)

const AlbumsContextProvider: React.FC = ({ children }) => {
  const { data: playlist } = useQuery(['playlist'], () =>
    getPlaylist('761BfN8cdi1Eqq4Jl4gR21')
  )

  const albums = getAlbumsFromPlaylist(playlist)

  return (
    <AlbumsContext.Provider value={{ albums }}>
      {children}
    </AlbumsContext.Provider>
  )
}

export default AlbumsContextProvider
