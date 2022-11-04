import { useContext } from 'react'
import { FlatList, RefreshControl } from 'react-native'
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
  const { albums, refetch, isRefetching } = useContext(
    AlbumsContext
  ) as AlbumsData

  const handleNavigateToAlbum = (album: Album): void =>
    navigation.navigate('AlbumDetails', { album })

  return (
    <>
      <StatusBar style="dark" />
      <Container>
        <FlatList
          data={albums}
          renderItem={({ item: album }) => (
            <AlbumSummary
              album={album}
              title={album.name}
              artists={album.artists}
              price={album.price!}
              cover={album.images[0].url}
              onNavigateToAlbum={handleNavigateToAlbum}
              key={album.id}
            />
          )}
          refreshControl={
            <RefreshControl
              onRefresh={refetch}
              refreshing={isRefetching}
              colors={['#D1F9FF']}
              tintColor="#D1F9FF"
            />
          }
        />
      </Container>
    </>
  )
}

export default AlbumSelection
