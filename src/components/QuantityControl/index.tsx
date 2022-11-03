import { useContext } from 'react'

import { Album, BagData } from '../../common/types'
import { BagContext } from '../../contexts/BagContext'

import { Wrapper, Button, Caption, Quantity } from './styles'

interface QuantityControlProps {
  album: Album
  quantity: number
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  album,
  quantity,
}) => {
  const { increaseAlbumQuantity, decreaseAlbumQuantity } = useContext(
    BagContext
  ) as BagData

  return (
    <Wrapper>
      <Button onPress={() => decreaseAlbumQuantity(album)}>
        <Caption>-</Caption>
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button onPress={() => increaseAlbumQuantity(album)}>
        <Caption>+</Caption>
      </Button>
    </Wrapper>
  )
}

export default QuantityControl
