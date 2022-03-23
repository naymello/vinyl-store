import { useContext } from 'react'

import { IBagContext } from '../../common/types'
import { BagContext } from '../../contexts/BagContext'

import { Wrapper, Button, Caption, Quantity } from './styles'

interface Props {
  vinylId: number
  quantity: number
}

const QuantityControl: React.FC<Props> = ({ vinylId, quantity }) => {
  const { changeVinylQuantity } = useContext(BagContext) as IBagContext

  return (
    <Wrapper>
      <Button onPress={() => changeVinylQuantity(vinylId, 'decrease')}>
        <Caption>-</Caption>
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button onPress={() => changeVinylQuantity(vinylId, 'increase')}>
        <Caption>+</Caption>
      </Button>
    </Wrapper>
  )
}

export default QuantityControl
