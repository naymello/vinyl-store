import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`

export const SafeAreaContainer = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.accent};
`
