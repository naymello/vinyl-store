import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  margin: 15px 0;
`

export const Information = styled.View`
  padding: 0 5px;
`

export const Cover = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: 15px;
`

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 2;
  top: -10px;
  left: -10px;
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  width: 200px;
`

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
`
