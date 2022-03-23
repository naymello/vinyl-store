import { ButtonText, Touchable } from './styles'

interface Props {
  buttonText: string
  action?: () => void
}

const Button: React.FC<Props> = ({ buttonText, action }) => {
  return (
    <Touchable onPress={action}>
      <ButtonText>{buttonText}</ButtonText>
    </Touchable>
  )
}

export default Button
