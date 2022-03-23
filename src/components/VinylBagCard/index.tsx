import { IVinylControl } from '../../common/types'

import {
  Cover,
  Title,
  Wrapper,
  Price,
  Information,
  DeleteButton,
} from './styles'

import DeleteIcon from '../../assets/DeleteIcon'

const VinylBagCard: React.FC<IVinylControl> = ({
  id,
  title,
  price,
  cover,
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
        <Price>$ {price}</Price>
      </Information>
    </Wrapper>
  )
}

export default VinylBagCard
