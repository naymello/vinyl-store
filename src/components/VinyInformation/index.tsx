import { View, Text } from 'react-native'
import { IVinyl } from '../../common/types'

const VinylInformation: React.FC<IVinyl> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default VinylInformation
