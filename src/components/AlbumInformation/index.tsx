import { Artist } from '../../common/types'
import { getArtistsNames } from '../../utils/getArtistsNames'

import { Cover, Wrapper, Price, TextInformation } from './styles'

type AlbumInformationProps = {
  title: string
  artists: Artist[]
  price: number
  cover: string
  releaseDate: string
}

const AlbumInformation: React.FC<AlbumInformationProps> = ({
  title,
  artists,
  price,
  cover,
  releaseDate,
}) => {
  const artistsNames = getArtistsNames(artists)
  const releaseYear = releaseDate.split('-')[0]

  return (
    <>
      <Cover source={{ uri: cover }} />
      <Wrapper>
        <TextInformation fontSize={24}>{title}</TextInformation>
        <TextInformation fontSize={18}>
          {artistsNames}, {releaseYear}
        </TextInformation>
        <Price>$ {price.toFixed(2)}</Price>
      </Wrapper>
    </>
  )
}

export default AlbumInformation
