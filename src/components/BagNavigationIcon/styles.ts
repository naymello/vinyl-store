import styled from 'styled-components/native'

export const BagCounter = styled.Text`
  position: absolute;
  top: 10px;
  left: ${({ children }) =>
    (children?.valueOf() as number) < 10 ? '10px' : '8px'};
  font-size: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accentText};
`
