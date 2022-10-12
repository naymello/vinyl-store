import { VinylBag } from '../../common/types'

import QuantityControl from '../QuantityControl'

import {
  Cover,
  Title,
  Wrapper,
  Price,
  Information,
  DeleteButton,
} from './styles'

import DeleteIcon from '../../assets/DeleteIcon'

interface VinylBagCardProps extends VinylBag {
  deleteVinyl: (id: number) => void
}

const VinylBagCard: React.FC<VinylBagCardProps> = ({
  id,
  title,
  price,
  cover,
  quantity,
  deleteVinyl,
}) => {
  return (
    <Wrapper>
      <DeleteButton onPress={() => deleteVinyl(id)}>
        <DeleteIcon />
      </DeleteButton>
      <Cover source={{ uri: cover }}></Cover>
      <Information>
        <Title>{title}</Title>
        <QuantityControl vinylId={id} quantity={quantity} />
        <Price>$ {price.toFixed(2)}</Price>
      </Information>
    </Wrapper>
  )
}

export default VinylBagCard
