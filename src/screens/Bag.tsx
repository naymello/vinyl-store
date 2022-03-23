import { useContext } from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

import { BagContext } from '../contexts/BagContext'
import { IBagContext } from '../common/types'

import { Container } from '../components/Container/styles'
import VinylBagCard from '../components/VinylBagCard'
import BagFooter from '../components/BagFooter'

const NoVinylWarning = styled.Text`
  font-size: 16px;
  align-self: center;
  margin: auto 0;
  font-weight: bold;
`

const Bag: React.FC = () => {
  const { vinylInBag, deleteVinyl, bagTotalPrice } = useContext(
    BagContext
  ) as IBagContext

  return (
    <>
      <ScrollView>
        <Container>
          {vinylInBag.map((vinyl) => (
            <VinylBagCard {...vinyl} deleteVinyl={deleteVinyl} key={vinyl.id} />
          ))}
          {!vinylInBag.length && (
            <NoVinylWarning>
              You don't have any vinyl in your bag yet.
            </NoVinylWarning>
          )}
        </Container>
      </ScrollView>
      <BagFooter totalValue={bagTotalPrice} />
    </>
  )
}

export default Bag
