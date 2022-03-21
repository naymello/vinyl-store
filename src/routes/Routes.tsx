import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import VinylSelection from '../screens/VinylSelection'
import VinylDetails from '../screens/VinylDetails'
import Bag from '../screens/Bag'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="VinylSelection" component={VinylSelection} />
      <Stack.Screen name="VinylDetails" component={VinylDetails} />
      <Stack.Screen name="Bag" component={Bag} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
