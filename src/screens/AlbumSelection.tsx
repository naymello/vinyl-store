import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList, AlbumsData } from '../common/types'

import { AlbumsContext } from '../contexts/AlbumsContext'
import AlbumSummary from '../components/VinylCard'
import { Container } from '../components/Container/styles'

type AlbumSelectionProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumSelection'
>

const AlbumSelection: React.FC<AlbumSelectionProps> = ({ navigation }) => {
  const { albums } = useContext(AlbumsContext) as AlbumsData

  const handleNavigateToAlbum = (id: string): void =>
    navigation.navigate('VinylDetails', { id })

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          {albums.map((album) => (
            <AlbumSummary
              title={album.name}
              artists={album.artists}
              price={album.tracks?.length! * 5 + 0.99}
              cover={album.images[0].url}
              id={album.id}
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
