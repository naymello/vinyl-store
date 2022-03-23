import { TouchableOpacity } from 'react-native'

interface Props {
  navigate: any
  icon: JSX.Element
}

const NavigationIcon: React.FC<Props> = ({ navigate, icon }) => {
  return (
    <TouchableOpacity
      onPress={navigate}
      hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
    >
      {icon}
    </TouchableOpacity>
  )
}

export default NavigationIcon
