import { Touchable, ButtonText } from './styles'

interface ButtonProps {
  message: string
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ message, onPress }) => {
  return (
    <Touchable onPress={onPress}>
      <ButtonText>{message}</ButtonText>
    </Touchable>
  )
}

export default Button
