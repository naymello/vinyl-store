import { createContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPlaylist } from '../services/getPlaylist'
import { getAlbumsFromPlaylist } from '../utils/getAlbumsFromPlaylist'
import { AlbumsData } from '../common/types'

export const AlbumsContext = createContext<AlbumsData | null>(null)

const AlbumsContextProvider: React.FC = ({ children }) => {
  const { data: playlist } = useQuery(['playlist'], () =>
    getPlaylist('7GmQiRi12MsOyfkOJ1zTzx')
  )

  const albums = getAlbumsFromPlaylist(playlist)

  return (
    <AlbumsContext.Provider value={{ albums }}>
      {children}
    </AlbumsContext.Provider>
  )
}

export default AlbumsContextProvider
