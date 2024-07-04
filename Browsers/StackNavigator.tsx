import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistroScreen from '../Screens/RegistroScreen';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator> 
      <Drawer.Screen name='Welcome' component={WelcomeScreen} />
      <Drawer.Screen name="Registro" component={RegistroScreen} />
    </Drawer.Navigator>
  );
}

export default function Navigator() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}