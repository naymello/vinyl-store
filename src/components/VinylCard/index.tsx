import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IVinyl, RootStackParamList } from '../../common/types'

import { Cover, Title, Wrapper, Author, Price, Information } from './styles'

interface Props extends IVinyl {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VinylSelection'>
}

const VinylCard: React.FC<Props> = ({
  id,
  title,
  author,
  price,
  cover,
  navigation,
}) => {
  return (
    <Wrapper onPress={() => navigation.navigate('VinylDetails', { id })}>
      <Cover source={{ uri: cover }} />
      <Information>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Price>$ {price.toFixed(2)}</Price>
      </Information>
    </Wrapper>
  )
}

export default VinylCard
