import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList, AlbumsData, Album } from '../common/types'

import { AlbumsContext } from '../contexts/AlbumsContext'
import AlbumSummary from '../components/AlbumSummary'
import { Container } from '../components/Container/styles'

type AlbumSelectionProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumSelection'
>

const AlbumSelection: React.FC<AlbumSelectionProps> = ({ navigation }) => {
  const { albums } = useContext(AlbumsContext) as AlbumsData

  const handleNavigateToAlbum = (album: Album): void =>
    navigation.navigate('AlbumDetails', { album })

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          {albums.map((album) => (
            <AlbumSummary
              album={album}
              title={album.name}
              artists={album.artists}
              price={album.tracks?.length! * 5 + 0.99}
              cover={album.images[0].url}
              onNavigateToAlbum={handleNavigateToAlbum}
              key={album.id}
            />
          ))}
        </Container>
      </ScrollView>
    </>
  )
}

export default AlbumSelection
