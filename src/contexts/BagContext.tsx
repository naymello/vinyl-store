import { useState, createContext } from 'react'

import { IVinyl, IBagContext } from '../common/types'

export const BagContext = createContext<IBagContext | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [vinylInBag, setVinylInBag] = useState<IVinyl[]>([])

  const addVinyl = (newVinyl: IVinyl) => {
    const vinylInBagCopy = [...vinylInBag]
    vinylInBagCopy.push(newVinyl)

    setVinylInBag(vinylInBagCopy)
  }

  const deleteVinyl = (id: number) => {
    const vinylInBagCopy = [...vinylInBag]
    const filteredVinylInBag = vinylInBagCopy.filter((vinyl) => vinyl.id !== id)

    setVinylInBag(filteredVinylInBag)
  }

  return (
    <BagContext.Provider value={{ vinylInBag, addVinyl, deleteVinyl }}>
      {children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
