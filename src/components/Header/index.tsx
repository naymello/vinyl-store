import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { Container, SafeAreaContainer } from './styles'

import Logo from '../../assets/Logo'

const Header: React.FC<NativeStackHeaderProps> = () => {
  return (
    <SafeAreaContainer>
      <Container>
        <Logo />
      </Container>
    </SafeAreaContainer>
  )
}

export default Header
