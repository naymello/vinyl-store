import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import VinylSelection from '../screens/VinylSelection'
import VinylDetails from '../screens/VinylDetails'
import Bag from '../screens/Bag'

import NavigationIcon from '../components/NavigationIcon'

import mainTheme from '../themes/mainTheme'

import Logo from '../assets/Logo'
import BagIcon from '../assets/BagIcon'
import BackArrow from '../assets/BackArrow'

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
        options={({ navigation }) => ({
          headerTitle: () => <Logo />,
          headerRight: () => (
            <NavigationIcon
              navigate={() => navigation.navigate('Bag')}
              icon={<BagIcon />}
            />
          ),
        })}
      />
      <Stack.Screen
        name="VinylDetails"
        component={VinylDetails}
        options={({ navigation }) => ({
          headerLeft: () => (
            <NavigationIcon
              navigate={() => navigation.navigate('VinylSelection')}
              icon={<BackArrow />}
            />
          ),
          headerRight: () => (
            <NavigationIcon
              navigate={() => navigation.navigate('Bag')}
              icon={<BagIcon />}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Bag"
        component={Bag}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
            color: mainTheme.colors.accentText,
          },
          title: 'Selected vinyl',
          headerLeft: () => (
            <NavigationIcon
              navigate={() => navigation.navigate('VinylSelection')}
              icon={<BackArrow />}
            />
          ),
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
