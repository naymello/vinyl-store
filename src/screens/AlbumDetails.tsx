import { useContext, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Audio } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { BagData, RootStackParamList } from '../common/types'

import AlbumInformation from '../components/AlbumInformation'
import Button from '../components/Button'
import { Container } from '../components/Container/styles'
import TrackPlayer from '../components/TrackPlayer'
import { BagContext } from '../contexts/BagContext'

type AlbumDetailsProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumDetails'
>

const AlbumDetails: React.FC<AlbumDetailsProps> = ({ route }) => {
  const { increaseAlbumQuantity } = useContext(BagContext) as BagData

  const [trackPlayback, setTrackPlayback] = useState<Sound>()
  const [trackPlaying, setTrackPlaying] = useState('')

  useEffect(() => {
    setupTrackPlaybackOnIOS()

    return trackPlayback
      ? () => {
          trackPlayback.unloadAsync()
        }
      : undefined
  }, [trackPlayback])

  const setupTrackPlaybackOnIOS = async (): Promise<void> => {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true })
  }

  const playTrack = async (trackUrl: string): Promise<void> => {
    if (trackPlaying === trackUrl) {
      pauseTrack()
      return
    }

    const { sound: playback } = await Audio.Sound.createAsync({
      uri: trackUrl,
    })
    setTrackPlayback(playback)
    setTrackPlaying(trackUrl)

    await playback.playAsync()
  }

  const pauseTrack = async (): Promise<void> => {
    trackPlayback?.pauseAsync()
    setTrackPlaying('')
  }

  const album = route.params?.album!

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <AlbumInformation
            title={album.name}
            artists={album.artists}
            price={album.price!}
            cover={album.images[0].url}
            releaseDate={album.release_date}
          />
        }
        data={album.tracks}
        renderItem={({ item: track }) => (
          <TrackPlayer track={track} playTrack={playTrack} />
        )}
        keyExtractor={(track) => track.id}
      />
      <Container>
        <Button
          message="Add to your bag"
          onPress={() => increaseAlbumQuantity(album)}
        />
      </Container>
    </>
  )
}

export default AlbumDetails
