import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { IVinyl } from '../common/types'
import { useRequest } from '../hooks/useRequest'

import VinylCard from '../components/VinylCard'
import { Container } from '../components/Container/styles'

type RootStackParamList = {
  VinylSelection: undefined
  Bag: undefined
  VinylDetails: { id: number } | undefined
}

type Props = NativeStackScreenProps<RootStackParamList, 'VinylSelection'>

interface IGistResponse {
  files: IFiles
}

interface IFiles {
  [key: string]: IVinylJSON
}

interface IVinylJSON {
  content: string
}

const VinylSelection: React.FC<Props> = ({ navigation }) => {
  const { response: gist } = useRequest<IGistResponse>(
    'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'
  )

  const vinylJSON = gist?.files['vinyl.json'].content as string
  const vinyl: IVinyl[] = JSON.parse(vinylJSON)

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          {vinyl?.map((vinyl) => (
            <VinylCard {...vinyl} key={vinyl.id} />
          ))}
        </Container>
      </ScrollView>
    </>
  )
}

export default VinylSelection
