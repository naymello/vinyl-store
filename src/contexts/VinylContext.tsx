import { createContext } from 'react'

import { gitHubGistsEndpoint } from '../common/constants'
import { IVinyl, IVinylContext } from '../common/types'
import { useRequest } from '../hooks/useRequest'

export const VinylContext = createContext<IVinylContext | null>(null)

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
  const vinyl: IVinyl[] = vinylJSON ? JSON.parse(vinylJSON) : []

  const getVinylById = (id: number): IVinyl => {
    const vinylFound = vinyl.find((vinyl) => vinyl.id === id) as IVinyl

    return vinylFound
  }

  return (
    <VinylContext.Provider value={{ vinyl, getVinylById }}>
      {children}
    </VinylContext.Provider>
  )
}

export default VinylContextProvider
