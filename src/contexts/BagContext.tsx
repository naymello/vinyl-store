import { useState, createContext } from 'react'

import { IVinyl } from '../common/types'

interface IBagContext {
  vinyl: IVinyl[]
  addVinyl: (vinyl: IVinyl) => void
  deleteVinyl: (id: number) => void
}

const BagContext = createContext<IBagContext | null>(null)

const bagContext: React.FC = ({ children }) => {
  const [vinyl, setVinyl] = useState<IVinyl[]>([])

  const addVinyl = (vinyl: IVinyl) => {}

  const deleteVinyl = (id: number) => {}

  return (
    <BagContext.Provider value={{ vinyl, addVinyl, deleteVinyl }}>
      {children}
    </BagContext.Provider>
  )
}

export default bagContext
