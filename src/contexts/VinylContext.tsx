import { createContext } from 'react'

import { gitHubGistsEndpoint } from '../common/constants'
import { Vinyl, VinylData } from '../common/types'
import { useRequest } from '../hooks/useRequest'

export const VinylContext = createContext<VinylData | null>(null)

interface IGistResponse {
  files: {
    [key: string]: {
      content: string
    }
  }
}

const VinylContextProvider: React.FC = ({ children }) => {
  const { response: gist } = useRequest<IGistResponse>(gitHubGistsEndpoint)

  const vinylJSON = gist?.files['vinyl.json'].content
  const vinyl: Vinyl[] = vinylJSON ? JSON.parse(vinylJSON) : []

  const getVinylById = (id: number): Vinyl => {
    const vinylFound = vinyl.find((vinyl) => vinyl.id === id) as Vinyl

    return vinylFound
  }

  return (
    <VinylContext.Provider value={{ vinyl, getVinylById }}>
      {children}
    </VinylContext.Provider>
  )
}

export default VinylContextProvider
