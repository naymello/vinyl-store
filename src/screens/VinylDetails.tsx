import { useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { BagData, VinylData, RootStackParamList } from '../common/types'

import { BagContext } from '../contexts/BagContext'
import { VinylContext } from '../contexts/VinylContext'

import VinylInformation from '../components/VinyInformation'
import Button from '../components/Button'
import { Container } from '../components/Container/styles'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylDetails'>

const VinylDetails: React.FC<Props> = ({ route }) => {
  const { getVinylById } = useContext(VinylContext) as VinylData
  const { addVinyl } = useContext(BagContext) as BagData

  const vinyl = getVinylById(route.params?.id as number)

  return (
    <>
      <VinylInformation {...vinyl} />
      <Container>
        <Button buttonText="Add to your bag" action={() => addVinyl(vinyl)} />
      </Container>
    </>
  )
}

export default VinylDetails
