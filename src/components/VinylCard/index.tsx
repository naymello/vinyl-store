import { IVinyl } from '../../common/types'

import { Cover, Title, Wrapper, Author, Price, Information } from './styles'

const VinylCard: React.FC<IVinyl> = ({ title, author, price, cover }) => {
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
