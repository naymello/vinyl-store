import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import VinylSelection from '../screens/VinylSelection'
import VinylDetails from '../screens/VinylDetails'
import Bag from '../screens/Bag'

import Header from '../components/Header'

import mainTheme from '../themes/mainTheme'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: mainTheme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name="VinylSelection"
        component={VinylSelection}
        options={{
          headerTitle: (props) => <Header {...props} />,
          headerStyle: {
            backgroundColor: mainTheme.colors.accent,
          },
        }}
      />
      <Stack.Screen name="VinylDetails" component={VinylDetails} />
      <Stack.Screen name="Bag" component={Bag} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
