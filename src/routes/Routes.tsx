import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import VinylSelection from '../screens/VinylSelection'
import VinylDetails from '../screens/VinylDetails'
import Bag from '../screens/Bag'

import mainTheme from '../themes/mainTheme'

import Logo from '../assets/Logo'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="VinylSelection"
      screenOptions={{
        contentStyle: {
          backgroundColor: mainTheme.colors.background,
        },
        headerStyle: {
          backgroundColor: mainTheme.colors.accent,
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="VinylSelection"
        component={VinylSelection}
        options={{
          headerTitle: () => <Logo />,
        }}
      />
      <Stack.Screen name="VinylDetails" component={VinylDetails} />
      <Stack.Screen name="Bag" component={Bag} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
