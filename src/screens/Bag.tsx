import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { BagContext } from '../contexts/BagContext'
import { IBagContext } from '../common/types'

import { Container } from '../components/Container/styles'
import VinylBagCard from '../components/VinylBagCard'

const Bag: React.FC = () => {
  const { vinylInBag } = useContext(BagContext) as IBagContext

  return (
    <ScrollView>
      <Container>
        {vinylInBag.map((vinyl) => (
          <VinylBagCard {...vinyl} key={vinyl.id} />
        ))}
      </Container>
    </ScrollView>
  )
}

export default Bag
