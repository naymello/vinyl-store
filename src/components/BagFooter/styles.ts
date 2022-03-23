import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 180px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.accent};
`

export const FooterText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const FooterValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
