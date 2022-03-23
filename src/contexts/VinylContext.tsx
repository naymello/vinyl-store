import { createContext } from 'react'

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

const BagContextProvider: React.FC = ({ children }) => {
  const { response: gist } = useRequest<IGistResponse>(
    'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'
  )

  const vinylJSON = gist?.files['vinyl.json'].content
  const vinyl: IVinyl[] = vinylJSON ? JSON.parse(vinylJSON) : []

  return (
    <VinylContext.Provider value={{ vinyl }}>{children}</VinylContext.Provider>
  )
}

export default BagContextProvider
