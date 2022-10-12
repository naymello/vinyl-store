import { useContext } from 'react'

import { BagData } from '../../common/types'
import { BagContext } from '../../contexts/BagContext'
import NavigationIcon from '../NavigationIcon'

import { BagCounter } from './styles'
import BagIcon from '../../assets/BagIcon'

interface BagNavigationIconProps {
  navigate: () => void
}

const BagNavigationIcon: React.FC<BagNavigationIconProps> = ({ navigate }) => {
  const { bagTotalQuantity } = useContext(BagContext) as BagData

  return (
    <NavigationIcon navigate={navigate} icon={<BagIcon />}>
      {!!bagTotalQuantity && <BagCounter>{bagTotalQuantity}</BagCounter>}
    </NavigationIcon>
  )
}

export default BagNavigationIcon
