import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { IVinyl } from '../common/types'
import { useRequest } from '../hooks/useRequest'

import VinylCard from '../components/VinylCard'
import { Container } from '../components/Container/styles'

interface IGistResponse {
  files: IFiles
}

interface IFiles {
  [key: string]: IVinylJSON
}

interface IVinylJSON {
  content: string
}

const VinylSelection: React.FC = () => {
  const { response: gist } = useRequest<IGistResponse>(
    'https://api.github.com/gists/3648d4454d0c68d836fac03386c17be1'
  )

  const vinylJSON = gist?.files['vinyl.json'].content
  const vinyl: IVinyl[] = vinylJSON ? JSON.parse(vinylJSON) : []

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
