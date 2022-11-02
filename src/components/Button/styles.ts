import styled from 'styled-components/native'

export const Touchable = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  justify-content: center;
  padding: 20px;
  margin: 30px 0;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.accentText};
  font-size: 20px;
  font-weight: bold;
`
