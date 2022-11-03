import { useState, createContext } from 'react'

import { AlbumInBag, BagData } from '../common/types'

export const BagContext = createContext<BagData | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [albumsBag, setAlbumsBag] = useState<AlbumInBag[]>([])

  const deleteAlbum = (albumId: string) => {
    const albumsBagCopy = [...albumsBag]
    const filteredAlbumsBag = albumsBagCopy.filter(
      (album) => album.id !== albumId
    )

    setAlbumsBag(filteredAlbumsBag)
  }

  const getBagTotalPrice = (): number => {
    const bagTotal = albumsBag.reduce(
      (previous, current) =>
        previous + current.price! * (current.quantity || 1),
      0
    )

    return bagTotal
  }

  const getBagTotalQuantity = (): number => {
    const albumTotalQuantity = albumsBag.reduce(
      (previous, current) => previous + (current.quantity || 1),
      0
    )

    return albumTotalQuantity
  }

  const increaseAlbumQuantity = (album: AlbumInBag) => {
    const albumsBagCopy = [...albumsBag]

    const albumIndex = albumsBag.findIndex(
      (albumInBag) => albumInBag.id === album.id
    )

    const isAlbumAlreadyInBag = albumIndex !== -1

    if (!isAlbumAlreadyInBag) {
      albumsBagCopy.push({
        ...album,
        quantity: 1,
      })
    } else {
      albumsBagCopy[albumIndex] = {
        ...album,
        quantity: ++album.quantity,
      }
    }

    setAlbumsBag(albumsBagCopy)
  }

  const decreaseAlbumQuantity = (album: AlbumInBag) => {
    const albumsBagCopy = [...albumsBag]

    const albumIndex = albumsBag.findIndex(
      (albumInBag) => albumInBag.id === album.id
    )

    if (album.quantity === 1) return deleteAlbum(album.id)

    albumsBagCopy[albumIndex] = {
      ...album,
      quantity: --album.quantity,
    }

    setAlbumsBag(albumsBagCopy)
  }

  const bagTotalPrice = getBagTotalPrice()
  const bagTotalQuantity = getBagTotalQuantity()

  return (
    <BagContext.Provider
      value={{
        albumsBag,
        deleteAlbum,
        increaseAlbumQuantity,
        decreaseAlbumQuantity,
        bagTotalPrice,
        bagTotalQuantity,
      }}
    >
      {children}
    </BagContext.Provider>
  )
}

export default BagContextProvider
