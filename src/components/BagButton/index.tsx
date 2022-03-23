import { TouchableOpacity } from 'react-native'

import BagIcon from '../../assets/BagIcon'

interface Props {
  navigation: any
}

const BagButton: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
      <BagIcon />
    </TouchableOpacity>
  )
}

export default BagButton
