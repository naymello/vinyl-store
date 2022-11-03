import styled from 'styled-components/native'

import { screenDimensions } from '../../utils/constants'

export const Cover = styled.Image`
  width: ${screenDimensions.windowWidth}px;
  height: ${screenDimensions.windowWidth}px;
`

export const Wrapper = styled.View`
  margin: 20px;
`

export const Price = styled.Text`
  margin-top: 10px;
  font-size: 32px;
  font-weight: bold;
`

export const TextInformation = styled.Text<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  margin: 5px 0;
`
