import { View } from 'react-native'
import { Artist } from '../../common/types'
import { getArtistsNames } from '../../utils/getArtistsNames'

import { Cover, Wrapper, Price, Container, TextInformation } from './styles'

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
        <TextInformation fontSize={22}>{title}</TextInformation>
        <Price>$ {price.toFixed(2)}</Price>
        <Container>
          <View>
            <TextInformation fontSize={18}>{artistsNames}</TextInformation>
            <TextInformation fontSize={18}>{releaseYear}</TextInformation>
          </View>
        </Container>
      </Wrapper>
    </>
  )
}

export default AlbumInformation
