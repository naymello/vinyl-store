import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList, SafeAreaView, ScrollView } from 'react-native'

import { RootStackParamList } from '../common/types'

import AlbumInformation from '../components/AlbumInformation'
import Button from '../components/Button'
import { Container } from '../components/Container/styles'
import TrackPlayer from '../components/TrackPlayer'

type AlbumDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumDetails'
>

const AlbumDetails: React.FC<AlbumDetailsProps> = ({ route }) => {
  const album = route.params?.album!

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <AlbumInformation
            title={album.name}
            artists={album.artists}
            price={album.tracks?.length! * 5 + 0.99}
            cover={album.images[0].url}
            releaseDate={album.release_date}
          />
        }
        data={album.tracks}
        renderItem={({ item }) => <TrackPlayer item={item} />}
        keyExtractor={(track) => track.id}
      />
      <Container>
        <Button message="Add to your bag" onPress={(): void => undefined} />
      </Container>
    </>
  )
}

export default AlbumDetails
