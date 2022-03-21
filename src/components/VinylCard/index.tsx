import { View, Text, Image } from 'react-native'

import { IVinyl } from '../../common/types'

import { Cover, Title, Wrapper, Author, Price } from './styles'

const VinylCard: React.FC<IVinyl> = ({ title, author, price, cover }) => {
  return (
    <Wrapper>
      <Cover source={{ uri: cover }}></Cover>
      <View>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Price>$ {price}</Price>
      </View>
    </Wrapper>
  )
}

export default VinylCard
