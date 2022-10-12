import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { VinylData, RootStackParamList } from '../common/types'

import { VinylContext } from '../contexts/VinylContext'
import VinylCard from '../components/VinylCard'
import { Container } from '../components/Container/styles'

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

const VinylSelection: React.FC<Props> = ({ navigation }) => {
  const { vinyl } = useContext(VinylContext) as VinylData

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
