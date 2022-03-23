import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IVinyl, RootStackParamList } from '../../common/types'

import { Cover, Title, Wrapper, Author, Price, Information } from './styles'

interface Props extends IVinyl {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VinylSelection'>
}

const VinylCard: React.FC<Props> = ({
  title,
  author,
  price,
  cover,
  navigation,
}) => {
  return (
    <Wrapper>
      <Cover source={{ uri: cover }}></Cover>
      <Information>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Price>$ {price}</Price>
      </Information>
    </Wrapper>
  )
}

export default VinylCard
