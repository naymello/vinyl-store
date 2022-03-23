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

  const getBagTotalPrice = (): number => {
    const bagTotal = vinylInBag.reduce(
      (previous, current) => previous + current.price * (current.quantity || 1),
      0
    )

    return bagTotal
  }

  const getBagTotalQuantity = (): number => {
    const bagVinylQuantity = vinylInBag.reduce(
      (previous, current) => previous + (current.quantity || 1),
      0
    )

    return bagVinylQuantity
  }

  const bagTotalPrice = getBagTotalPrice()
  const bagTotalQuantity = getBagTotalQuantity()

  return (
    <BagContext.Provider
      value={{
        vinylInBag,
        addVinyl,
        deleteVinyl,
        bagTotalPrice,
        bagTotalQuantity,
      }}
    >
      {children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
