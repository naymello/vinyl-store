import { Album, Artist } from '../../common/types'
import { getArtistsNames } from '../../utils/getArtistsNames'

import { Cover, Title, Wrapper, Author, Price, Information } from './styles'

interface AlbumSummaryProps {
  album: Album
  title: string
  artists: Artist[]
  price: number
  cover: string
  onNavigateToAlbum: (album: Album) => void
}

const AlbumSummary: React.FC<AlbumSummaryProps> = ({
  album,
  title,
  artists,
  price,
  cover,
  onNavigateToAlbum,
}) => {
  const artistsNames = getArtistsNames(artists)

  return (
    <Wrapper onPress={() => onNavigateToAlbum(album)}>
      <Cover source={{ uri: cover }} />
      <Information>
        <Title>{title}</Title>
        <Author>{artistsNames}</Author>
        <Price>$ {price.toFixed(2)}</Price>
      </Information>
    </Wrapper>
  )
}

export default AlbumSummary
