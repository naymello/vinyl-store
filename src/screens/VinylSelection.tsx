import { ScrollView } from 'react-native'

import { IVinyl } from '../common/types'
import { useRequest } from '../hooks/useRequest'

import VinylCard from '../components/VinylCard'

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
    <ScrollView>
      {vinyl?.map((vinyl) => (
        <VinylCard {...vinyl} key={vinyl.id} />
      ))}
    </ScrollView>
  )
}

export default VinylSelection
