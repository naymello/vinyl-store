import { View } from 'react-native'
import { IVinyl } from '../../common/types'

import { Cover, Wrapper, Price, Container, TextInformation } from './styles'

const VinylInformation: React.FC<IVinyl> = ({
  cover,
  title,
  author,
  price,
  releaseYear,
  genres,
}) => {
  return (
    <>
      <Cover source={{ uri: cover }} />
      <Wrapper>
        <TextInformation fontSize="22px">{title}</TextInformation>
        <Price>$ {price}</Price>
        <Container>
          <View>
            <TextInformation fontSize="18px">{author}</TextInformation>
            <TextInformation fontSize="18px">{releaseYear}</TextInformation>
          </View>
          <View>
            {genres.map((genre) => (
              <TextInformation fontSize="16px" key={genre}>
                {genre}
              </TextInformation>
            ))}
          </View>
        </Container>
      </Wrapper>
    </>
  )
}

export default VinylInformation
