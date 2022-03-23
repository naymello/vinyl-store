import { useState, createContext } from 'react'

import { IVinyl, IVinylInBag, IBagContext } from '../common/types'

export const BagContext = createContext<IBagContext | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [vinylInBag, setVinylInBag] = useState<IVinylInBag[]>([])

  const addVinyl = (newVinyl: IVinyl) => {
    const vinylInBagCopy = [...vinylInBag]

    const sameVinylIndex = vinylInBag.findIndex(
      (vinyl) => vinyl.id === newVinyl.id
    )
    const hasSameVinyl = sameVinylIndex !== -1

    if (hasSameVinyl) {
      const sameVinyl = vinylInBagCopy[sameVinylIndex]

      vinylInBagCopy[sameVinylIndex] = {
        ...sameVinyl,
        quantity: ++sameVinyl.quantity,
      }
    } else {
      vinylInBagCopy.push({ ...newVinyl, quantity: 1 })
    }

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

  const changeVinylQuantity = (
    id: number,
    mode: 'increase' | 'decrease' = 'increase'
  ): void => {
    const vinylInBagCopy = [...vinylInBag]

    const vinylIndex = vinylInBag.findIndex((vinyl) => vinyl.id === id)
    const vinyl = vinylInBagCopy[vinylIndex]

    if (mode === 'increase') {
      vinylInBagCopy[vinylIndex] = {
        ...vinyl,
        quantity: ++vinyl.quantity,
      }
    } else {
      vinylInBagCopy[vinylIndex] = {
        ...vinyl,
        quantity: --vinyl.quantity,
      }
    }

    setVinylInBag(vinylInBagCopy)
  }

  const bagTotalPrice = getBagTotalPrice()
  const bagTotalQuantity = getBagTotalQuantity()

  return (
    <BagContext.Provider
      value={{
        vinylInBag,
        addVinyl,
        deleteVinyl,
        changeVinylQuantity,
        bagTotalPrice,
        bagTotalQuantity,
      }}
    >
      {children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
