import { useContext } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { BagContext } from '../contexts/BagContext'
import { BagData } from '../common/types'

import { Container } from '../components/Container/styles'
import AlbumBagSummary from '../components/AlbumBagSummary'
import BagFooter from '../components/BagFooter'

const NoAlbumWarning = styled.Text`
  font-size: 16px;
  align-self: center;
  margin: auto 0;
  font-weight: bold;
`

const Bag: React.FC = () => {
  const { albumsBag, bagTotalPrice } = useContext(BagContext) as BagData

  return (
    <>
      <ScrollView>
        <Container>
          {albumsBag.map((bagAlbum) => (
            <AlbumBagSummary
              album={bagAlbum.album}
              title={bagAlbum.album.name}
              price={bagAlbum.album.price!}
              cover={bagAlbum.album.images[0].url}
              quantity={bagAlbum.quantity}
              key={bagAlbum.album.id}
            />
          ))}
          {!albumsBag.length && (
            <NoAlbumWarning>
              You don't have any vinyl in your bag yet.
            </NoAlbumWarning>
          )}
        </Container>
      </ScrollView>
      <BagFooter totalValue={bagTotalPrice} />
    </>
  )
}

export default Bag
