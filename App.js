import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contato from './src/Pages/Contato';
import Home from './src/Pages/Home';
import Quemsomos from './src/Pages/QuemSomos';
import Fotos from './src/Pages/Fotos';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quemsomos" component={Quemsomos} />
        <Stack.Screen name="Fotos" component={Fotos} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

