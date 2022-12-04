import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import RestaurantScreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          {/* Screens */}
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="RestaurantScreen" component={RestaurantScreen}/>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
    

  );
}