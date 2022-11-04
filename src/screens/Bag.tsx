import { useContext } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import styled from 'styled-components/native'

import { BagContext } from '../contexts/BagContext'
import { BagData } from '../common/types'

import AlbumBagSummary from '../components/AlbumBagSummary'
import BagFooter from '../components/BagFooter'

const NoAlbumWarning = styled.Text`
  font-size: 16px;
  align-self: center;
  font-weight: bold;
  margin-top: 20px;
`

const Bag: React.FC = () => {
  const { albumsBag, bagTotalPrice } = useContext(BagContext) as BagData

  return (
    <>
      <FlatList
        data={albumsBag}
        renderItem={({ item: bagAlbum }) => (
          <AlbumBagSummary
            album={bagAlbum.album}
            title={bagAlbum.album.name}
            price={bagAlbum.album.price!}
            cover={bagAlbum.album.images[0].url}
            quantity={bagAlbum.quantity}
            key={bagAlbum.album.id}
          />
        )}
        keyExtractor={(albumBag) => albumBag.album.id}
        ListEmptyComponent={
          <NoAlbumWarning>
            You don't have any vinyl in your bag yet.
          </NoAlbumWarning>
        }
      />
      <BagFooter totalValue={bagTotalPrice} />
    </>
  )
}

export default Bag
