import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { Container, SafeAreaContainer } from './styles'

import Logo from '../../assets/Logo'
import BagIcon from '../../assets/BagIcon'

const Header: React.FC<NativeStackHeaderProps> = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <Logo />
        <BagIcon />
      </Container>
    </SafeAreaContainer>
  )
}

export default Header
