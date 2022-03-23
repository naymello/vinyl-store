import { Container, FooterText, FooterValue } from './styles'

interface Props {
  totalValue: number
}

const BagFooter: React.FC<Props> = ({ totalValue }) => {
  return (
    <Container>
      <FooterText>
        Total: <FooterValue> $ {totalValue}</FooterValue>
      </FooterText>
    </Container>
  )
}

export default BagFooter
