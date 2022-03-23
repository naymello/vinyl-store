import { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IBagContext, RootStackParamList } from '../common/types'

import { BagContext } from '../contexts/BagContext'
import VinylInformation from '../components/VinyInformation'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

const VinylDetails: React.FC<Props> = ({ route }) => {
  const { addVinyl } = useContext(BagContext) as IBagContext

  return (
    <>
      <VinylInformation />
    </>
  )
}

export default VinylDetails
