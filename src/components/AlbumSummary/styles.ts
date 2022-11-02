import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin: 15px 0;
`

export const Information = styled.View`
  width: 100%;
  padding: 5px;
`

export const Cover = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 15px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 60%;
`

export const Author = styled.Text`
  font-size: 12px;
  margin-top: 5px;
`

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: auto;
`
