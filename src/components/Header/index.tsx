import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { Container, SafeAreaContainer } from './styles'

import Logo from '../../assets/Logo'
import BagIcon from '../../assets/BagIcon'

interface IHeaderContent {
  [key: string]: JSX.Element
}

const VinylSelectionContent: React.FC = () => {
  return (
    <>
      <Logo />
      <BagIcon />
    </>
  )
}

const Header: React.FC<NativeStackHeaderProps> = ({ route }) => {
  const getHeaderContent = (routeName: string): JSX.Element => {
    const headerContent: IHeaderContent = {
      VinylSelection: <VinylSelectionContent />,
    }

    return headerContent[routeName]
  }

  return (
    <SafeAreaContainer>
      <Container>{getHeaderContent(route.name)}</Container>
    </SafeAreaContainer>
  )
}

export default Header
