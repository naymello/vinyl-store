import styled from 'styled-components/native'

import { screenDimensions } from '../../common/constants'

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

export const Container = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`

export const TextInformation = styled.Text<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  margin: 2.5px 0;
`
