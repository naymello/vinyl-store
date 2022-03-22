import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  align-items: flex-end;
  padding: 15px;
`
