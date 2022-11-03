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
  const { albumsBag, deleteAlbum, bagTotalPrice } = useContext(
    BagContext
  ) as BagData

  return (
    <>
      <ScrollView>
        <Container>
          {albumsBag.map((vinyl) => (
            <AlbumBagSummary
              {...vinyl}
              deleteAlbum={deleteAlbum}
              key={vinyl.id}
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
