import { useContext } from 'react'

import QuantityControl from '../QuantityControl'
import { BagContext } from '../../contexts/BagContext'
import { Album, BagData } from '../../common/types'
import DeleteIcon from '../../assets/DeleteIcon'

import {
  Cover,
  Title,
  Wrapper,
  Price,
  Information,
  DeleteButton,
} from './styles'

interface AlbumsBagSummaryProps {
  album: Album
  title: string
  price: number
  cover: string
  quantity: number
}

const AlbumBagSummary: React.FC<AlbumsBagSummaryProps> = ({
  album,
  title,
  price,
  cover,
  quantity,
}) => {
  const { deleteAlbum } = useContext(BagContext) as BagData

  return (
    <Wrapper>
      <DeleteButton onPress={() => deleteAlbum(album.id)}>
        <DeleteIcon />
      </DeleteButton>
      <Cover source={{ uri: cover }} />
      <Information>
        <Title>{title}</Title>
        <QuantityControl album={album} quantity={quantity} />
        <Price>$ {price.toFixed(2)}</Price>
      </Information>
    </Wrapper>
  )
}

export default AlbumBagSummary
