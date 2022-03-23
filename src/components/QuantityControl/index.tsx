import { Wrapper, Button, Caption, Quantity } from './styles'

interface Props {
  vinylId: number
  quantity: number
}

const QuantityControl: React.FC<Props> = ({ vinylId, quantity }) => {
  return (
    <Wrapper>
      <Button>
        <Caption>-</Caption>
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button>
        <Caption>+</Caption>
      </Button>
    </Wrapper>
  )
}

export default QuantityControl
