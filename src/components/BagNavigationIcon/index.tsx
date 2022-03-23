import { useContext } from 'react'

import { IBagContext } from '../../common/types'
import { BagContext } from '../../contexts/BagContext'
import NavigationIcon from '../NavigationIcon'

import { BagCounter } from './styles'
import BagIcon from '../../assets/BagIcon'

interface Props {
  navigate: () => void
}

const BagNavigationIcon: React.FC<Props> = ({ navigate }) => {
  const { bagTotalQuantity } = useContext(BagContext) as IBagContext

  return (
    <NavigationIcon navigate={navigate} icon={<BagIcon />}>
      {!!bagTotalQuantity && <BagCounter>{bagTotalQuantity}</BagCounter>}
    </NavigationIcon>
  )
}

export default BagNavigationIcon
