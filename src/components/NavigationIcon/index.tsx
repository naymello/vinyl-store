import { TouchableOpacity } from 'react-native'

interface NavigationIconProps {
  navigate: () => void
  icon: JSX.Element
}

const NavigationIcon: React.FC<NavigationIconProps> = ({
  navigate,
  icon,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={navigate}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      {icon}
      {children}
    </TouchableOpacity>
  )
}

export default NavigationIcon
