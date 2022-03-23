import { useState, createContext } from 'react'

import { IVinyl, IBagContext } from '../common/types'

const BagContext = createContext<IBagContext | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [vinyl, setVinyl] = useState<IVinyl[]>([])

  const addVinyl = (newVinyl: IVinyl) => {
    const vinylCopy = [...vinyl]
    vinylCopy.push(newVinyl)

    setVinyl(vinylCopy)
  }

  const deleteVinyl = (id: number) => {
    const vinylCopy = [...vinyl]
    const filteredVinyl = vinylCopy.filter((vinyl) => vinyl.id !== id)

    setVinyl(filteredVinyl)
  }

  return (
    <BagContext.Provider value={{ vinyl, addVinyl, deleteVinyl }}>
      {children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
