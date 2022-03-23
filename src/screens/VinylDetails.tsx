import { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IBagContext, IVinylContext, RootStackParamList } from '../common/types'

import { BagContext } from '../contexts/BagContext'
import { VinylContext } from '../contexts/VinylContext'

import VinylInformation from '../components/VinyInformation'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

const VinylDetails: React.FC<Props> = ({ route }) => {
  const { getVinylById } = useContext(VinylContext) as IVinylContext
  const { addVinyl } = useContext(BagContext) as IBagContext

  const vinyl = getVinylById(route.params?.id as number)

  return (
    <>
      <VinylInformation vinyl={vinyl} />
    </>
  )
}

export default VinylDetails
