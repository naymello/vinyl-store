import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { BagContext } from '../contexts/BagContext'
import { IBagContext } from '../common/types'

import { Container } from '../components/Container/styles'
import VinylBagCard from '../components/VinylBagCard'
import BagFooter from '../components/BagFooter'

const Bag: React.FC = () => {
  const { vinylInBag, getBagTotal } = useContext(BagContext) as IBagContext

  const totalValue = getBagTotal()

  return (
    <ScrollView>
      <Container>
        {vinylInBag.map((vinyl) => (
          <VinylBagCard {...vinyl} key={vinyl.id} />
        ))}
      </Container>
      <BagFooter totalValue={totalValue} />
    </ScrollView>
  )
}

export default Bag
