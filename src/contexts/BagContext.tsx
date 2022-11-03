import { useState, createContext } from 'react'

import { AlbumInBag, BagData, Album } from '../common/types'

export const BagContext = createContext<BagData | null>(null)

const BagContextProvider: React.FC = ({ children }) => {
  const [albumsBag, setAlbumsBag] = useState<AlbumInBag[]>([])

  const addAlbum = (newAlbum: Album) => {
    const albumsBagCopy = [...albumsBag]

    const hasSameAlbum = albumsBag
      .map((albums) => albums.id)
      .includes(newAlbum.id)

    if (hasSameAlbum) {
      increaseAlbumQuantity(newAlbum.id)
    } else {
      albumsBagCopy.push({ ...newAlbum, quantity: 1 })
    }

    setAlbumsBag(albumsBagCopy)
  }

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

  const increaseAlbumQuantity = (albumId: string) => {
    const albumsBagCopy = [...albumsBag]

    const albumIndex = albumsBag.findIndex((album) => album.id === albumId)
    const album = albumsBagCopy[albumIndex]

    albumsBagCopy[albumIndex] = {
      ...album,
      quantity: ++album.quantity,
    }

    setAlbumsBag(albumsBagCopy)
  }

  const decreaseAlbumQuantity = (albumId: string) => {
    const albumsBagCopy = [...albumsBag]

    const albumIndex = albumsBag.findIndex((album) => album.id === albumId)
    const album = albumsBagCopy[albumIndex]

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
        addAlbum,
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
