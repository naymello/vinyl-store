import { AlbumInBag } from '../../common/types'

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

interface AlbumBagSummaryProps extends AlbumInBag {
  deleteAlbum: (albumId: string) => void
}

const AlbumBagSummary: React.FC<AlbumBagSummaryProps> = ({
  id,
  title,
  price,
  cover,
  quantity,
  deleteAlbum,
}) => {
  return (
    <Wrapper>
      <DeleteButton onPress={() => deleteAlbum(id)}>
        <DeleteIcon />
      </DeleteButton>
      <Cover source={{ uri: cover }}></Cover>
      <Information>
        <Title>{title}</Title>
        <QuantityControl albumId={id} quantity={quantity} />
        <Price>$ {price.toFixed(2)}</Price>
      </Information>
    </Wrapper>
  )
}

export default AlbumBagSummary
