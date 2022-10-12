import { ButtonText, Touchable } from './styles'

interface ButtonProps {
  buttonText: string
  action?: () => void
}

const Button: React.FC<ButtonProps> = ({ buttonText, action }) => {
  return (
    <Touchable onPress={action}>
      <ButtonText>{buttonText}</ButtonText>
    </Touchable>
  )
}

export default Button
