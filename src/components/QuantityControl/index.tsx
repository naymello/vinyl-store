import { useContext } from 'react'

import { BagData } from '../../common/types'
import { BagContext } from '../../contexts/BagContext'

import { Wrapper, Button, Caption, Quantity } from './styles'

interface QuantityControlProps {
  vinylId: number
  quantity: number
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  vinylId,
  quantity,
}) => {
  const { changeVinylQuantity } = useContext(BagContext) as BagData

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
