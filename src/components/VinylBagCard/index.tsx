import { IVinyl } from '../../common/types'

import {
  Cover,
  Title,
  Wrapper,
  Price,
  Information,
  DeleteButton,
} from './styles'

const VinylBagCard: React.FC<IVinyl> = ({ title, price, cover }) => {
  return (
    <Wrapper>
      <DeleteButton />
      <Cover source={{ uri: cover }}></Cover>
      <Information>
        <Title>{title}</Title>
        <Price>$ {price}</Price>
      </Information>
    </Wrapper>
  )
}

export default VinylBagCard
