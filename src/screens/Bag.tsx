import { useContext } from 'react'
import { ScrollView } from 'react-native'

import { BagContext } from '../contexts/BagContext'
import { IBagContext } from '../common/types'

import { Container } from '../components/Container/styles'

const Bag: React.FC = () => {
  const { vinyl } = useContext(BagContext) as IBagContext

  return (
    <ScrollView>
      <Container></Container>
    </ScrollView>
  )
}

export default Bag
