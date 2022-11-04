import { createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPlaylist } from '../services/getPlaylist'
import { getAlbumsFromPlaylist } from '../utils/getAlbumsFromPlaylist'
import { AlbumsData } from '../common/types'

export const AlbumsContext = createContext<AlbumsData | null>(null)

const AlbumsContextProvider: React.FC = ({ children }) => {
  const {
    data: playlist,
    refetch,
    isRefetching,
  } = useQuery(['playlist'], getPlaylist)

  const albums = getAlbumsFromPlaylist(playlist)

  return (
    <AlbumsContext.Provider value={{ albums, refetch, isRefetching }}>
      {children}
    </AlbumsContext.Provider>
  )
}

export default AlbumsContextProvider
