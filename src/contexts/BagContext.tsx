import { useState, createContext } from 'react'

import { Album, AlbumsBagItem, BagData } from '../common/types'

export const BagContext = createContext<BagData | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [albumsBag, setAlbumsBag] = useState<AlbumsBagItem[]>([])

  const deleteAlbum = (albumId: string) => {
    const albumsBagCopy = [...albumsBag]
    const filteredAlbumsBag = albumsBagCopy.filter(
      (bagAlbum) => bagAlbum.album.id !== albumId
    )

    setAlbumsBag(filteredAlbumsBag)
  }

  const getBagTotalPrice = (): number => {
    const bagTotal = albumsBag.reduce(
      (previous, current) =>
        previous + current.album.price! * (current.quantity || 1),
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

  const increaseAlbumQuantity = (album: Album) => {
    const albumsBagCopy = [...albumsBag]

    const bagAlbumIndex = albumsBag.findIndex(
      (bagAlbum) => bagAlbum.album.id === album.id
    )

    const isAlbumAlreadyInBag = bagAlbumIndex !== -1

    if (!isAlbumAlreadyInBag) {
      albumsBagCopy.push({
        album,
        quantity: 1,
      })
    } else {
      const albumQuantity = albumsBag[bagAlbumIndex].quantity

      albumsBagCopy[bagAlbumIndex] = {
        album,
        quantity: albumQuantity + 1,
      }
    }

    setAlbumsBag(albumsBagCopy)
  }

  const decreaseAlbumQuantity = (album: Album) => {
    const albumsBagCopy = [...albumsBag]

    const bagAlbumIndex = albumsBag.findIndex(
      (bagAlbum) => bagAlbum.album.id === album.id
    )

    const albumInBag = albumsBag[bagAlbumIndex]

    if (albumInBag.quantity === 1) return deleteAlbum(album.id)

    albumsBagCopy[bagAlbumIndex] = {
      album,
      quantity: albumInBag.quantity - 1,
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
