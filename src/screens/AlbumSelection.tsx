import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { RootStackParamList, AlbumsData } from '../common/types'

import { AlbumsContext } from '../contexts/AlbumsContext'
import VinylCard from '../components/VinylCard'
import { Container } from '../components/Container/styles'

type AlbumSelectionProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumSelection'
>

const AlbumSelection: React.FC<AlbumSelectionProps> = ({ navigation }) => {
  const { albums } = useContext(AlbumsContext) as AlbumsData

  return (
    <>
      <StatusBar />
      <ScrollView>
        <Container>
          {albums.map((album) => (
            <VinylCard {...album} key={album.id} navigation={navigation} />
          ))}
        </Container>
      </ScrollView>
    </>
  )
}

export default AlbumSelection
