import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';



import Home from './components/home';

import Playstation from './components/Playstation';

import Nintendo from './components/Nintendo';

import Xbox from './components/Xbox';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function App() {
  console.disableYellowBox = true;

  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        
      }}
      >
    <Tab.Screen name="Home" component={Home} options={{
      tabBarIcon: () => <Ionicons name='md-home' size={28} color={'#000'} />
      ,headerShown:false}}
    />

    <Tab.Screen name="Playstation" component={Playstation}options={{
      tabBarIcon: () => <Ionicons name='logo-playstation' size={28} color={'blue'}/>
    ,headerShown:false}}/>

    <Tab.Screen name="Nintendo" component={Nintendo} options={{
      tabBarIcon: () => <Ionicons name='md-phone-landscape' size={28} color={'red'}/>
      ,headerShown:false}}/>

    <Tab.Screen name="Xbox" component={Xbox} options={{
      tabBarIcon: () => <Ionicons name='logo-xbox' size={28} color={'green'}/>
      ,headerShown:false}}/>

  </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  
})

