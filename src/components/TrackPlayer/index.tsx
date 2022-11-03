import React from 'react'
import { TouchableOpacity } from 'react-native'
import PauseButton from '../../assets/PauseButton'

import { Track } from '../../common/types'
import { Container, Title, Wrapper } from './styles'

type TrackProps = {
  track: Track
  playTrack: (trackUrl: string) => void
  isTrackPlaying: boolean
}

const TrackPlayer: React.FC<TrackProps> = ({
  track,
  playTrack,
  isTrackPlaying,
}) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => playTrack(track.preview_url)}>
        <Wrapper>
          {isTrackPlaying && <PauseButton />}
          <Title isTrackPlaying={isTrackPlaying}>{track.name}</Title>
        </Wrapper>
      </TouchableOpacity>
    </Container>
  )
}

export default TrackPlayer
