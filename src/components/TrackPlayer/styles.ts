import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
`

export const Wrapper = styled.View`
  flex-direction: row;
  padding: 5px 0;
`
export const Title = styled.Text<{ isTrackPlaying: boolean }>`
  font-weight: bold;
  font-size: 18px;
  margin-left: ${({ isTrackPlaying }) => (isTrackPlaying ? '10px' : '0')};
`
