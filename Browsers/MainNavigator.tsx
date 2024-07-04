import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistroScreen from '../Screens/RegistroScreen';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import Informacion from '../Screens/InformacionScreen';
import EditarEliminarScreen from '../Screens/EditarEliminarScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={WelcomeScreen} />
      <Drawer.Screen name="Tabs" component={MyTabs} />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Registro' component={RegistroScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeliculasScreen from '../Screens/PeliculasScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={RegistroScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Informacion" component={Informacion} options={{headerShown: false}}/>
      <Tab.Screen name="Edi-Eli" component={EditarEliminarScreen} options={{headerShown: false}} />
      <Tab.Screen name="Peliculas" component={PeliculasScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function Navegador() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
