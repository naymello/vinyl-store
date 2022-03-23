import { IVinyl } from '../../common/types'

import {
  Cover,
  Title,
  Wrapper,
  Price,
  Information,
  DeleteButton,
  RowWrapper,
} from './styles'

import DeleteIcon from '../../assets/DeleteIcon'

interface Props extends IVinyl {
  deleteVinyl: (id: number) => void
}

const VinylBagCard: React.FC<Props> = ({
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
        <RowWrapper>
          <Price>$ {price.toFixed(2)}</Price>
        </RowWrapper>
      </Information>
    </Wrapper>
  )
}

export default VinylBagCard
