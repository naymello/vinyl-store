import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IVinylContext, RootStackParamList } from '../common/types'

import VinylCard from '../components/VinylCard'
import { Container } from '../components/Container/styles'
import { VinylContext } from '../contexts/VinylContext'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

const VinylSelection: React.FC<Props> = ({ navigation }) => {
  const { vinyl } = useContext(VinylContext) as IVinylContext

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          {vinyl.map((vinyl) => (
            <VinylCard {...vinyl} key={vinyl.id} navigation={navigation} />
          ))}
        </Container>
      </ScrollView>
    </>
  )
}

export default VinylSelection
