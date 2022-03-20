import { View, Text, Image } from 'react-native'

import { IVinyl } from '../../common/types'

const VinylCard: React.FC<IVinyl> = ({ title, author, price, cover }) => {
  return (
    <View>
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
    </View>
  )
}

export default VinylCard
