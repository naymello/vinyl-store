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

  const addVinyl = (newVinyl: IVinyl) => {
    const vinylCopy = [...vinyl]
    vinylCopy.push(newVinyl)

    setVinyl(vinylCopy)
  }

  const deleteVinyl = (id: number) => {}

  return (
    <BagContext.Provider value={{ vinyl, addVinyl, deleteVinyl }}>
      {children}
    </BagContext.Provider>
  )
}

export default bagContext
