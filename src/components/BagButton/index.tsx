import { TouchableOpacity } from 'react-native'

import BagIcon from '../../assets/BagIcon'

interface Props {
  navigation: any
}

const BagButton: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Bag')}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      <BagIcon />
    </TouchableOpacity>
  )
}

export default BagButton
