import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList } from '../common/types'

import AlbumInformation from '../components/AlbumInformation'
import Button from '../components/Button'
import { Container } from '../components/Container/styles'

type AlbumDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumDetails'
>

const AlbumDetails: React.FC<AlbumDetailsProps> = ({ route }) => {
  const album = route.params?.album!

  console.log(JSON.stringify(album), 'welcome to the machine')

  return (
    <>
      <AlbumInformation
        title={album.name}
        artists={album.artists}
        price={album.tracks?.length! * 5 + 0.99}
        cover={album.images[0].url}
        releaseDate={album.release_date}
      />
      <Container>
        <Button buttonText="Add to your bag" />
      </Container>
    </>
  )
}

export default AlbumDetails
