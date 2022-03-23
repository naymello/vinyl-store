import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
`

export const Caption = styled.Text`
  font-weight: bold;
`

export const Quantity = styled.Text`
  font-weight: bold;
  margin: 0 10px;
`
