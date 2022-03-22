import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.accent};
  justify-content: flex-end;
  padding: 15px 20px;
`
