import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { BagContext } from '../contexts/BagContext'
import { IBagContext } from '../common/types'

import { Container } from '../components/Container/styles'
import VinylBagCard from '../components/VinylBagCard'
import BagFooter from '../components/BagFooter'

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
        </Container>
      </ScrollView>
      <BagFooter totalValue={bagTotalPrice} />
    </>
  )
}

export default Bag
