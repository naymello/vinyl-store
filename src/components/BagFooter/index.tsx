import Button from '../Button'

import { Container, FooterText, FooterValue } from './styles'

interface BagFooterProps {
  totalValue: number
}

const BagFooter: React.FC<BagFooterProps> = ({ totalValue }) => {
  return (
    <Container>
      <FooterText>
        Total: <FooterValue> $ {totalValue.toFixed(2)}</FooterValue>
      </FooterText>
      <Button message="Go to payment" onPress={(): void => undefined} />
    </Container>
  )
}

export default BagFooter
