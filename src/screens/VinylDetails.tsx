import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../common/types'

import VinylInformation from '../components/VinyInformation'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

const VinylDetails: React.FC<Props> = ({ route }) => {
  return (
    <>
      <VinylInformation />
    </>
  )
}

export default VinylDetails
