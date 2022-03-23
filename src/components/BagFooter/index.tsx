import { Text } from 'react-native'

import { Container } from './styles'

interface Props {
  totalValue: number
}

const BagFooter: React.FC<Props> = ({ totalValue }) => {
  return (
    <Container>
      <Text>BagFooter</Text>
    </Container>
  )
}

export default BagFooter
