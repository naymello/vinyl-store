import { View, Text, Image } from 'react-native'

import { IVinyl } from '../../common/types'

import { Wrapper } from './styles'

const VinylCard: React.FC<IVinyl> = ({ title, author, price, cover }) => {
  return (
    <Wrapper>
      <Image
        source={{ uri: cover }}
        style={{
          width: 150,
          height: 150,
        }}
      ></Image>
      <View>
        <Text>{title}</Text>
        <Text>{author}</Text>
        <Text>$ {price}</Text>
      </View>
    </Wrapper>
  )
}

export default VinylCard
