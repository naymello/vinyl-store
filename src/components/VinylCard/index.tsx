import { View, Text, Image } from 'react-native'

import { IVinyl } from '../../common/types'

import { VinylCover, VinylTitle, Wrapper, VinylAuthor } from './styles'

const VinylCard: React.FC<IVinyl> = ({ title, author, price, cover }) => {
  return (
    <Wrapper>
      <VinylCover source={{ uri: cover }}></VinylCover>
      <View>
        <VinylTitle>{title}</VinylTitle>
        <VinylAuthor>{author}</VinylAuthor>
        <Text>$ {price}</Text>
      </View>
    </Wrapper>
  )
}

export default VinylCard
