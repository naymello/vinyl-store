import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { Container } from './styles'
import Logo from '../../assets/Logo'

const Header: React.FC<NativeStackHeaderProps> = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header
