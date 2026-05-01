import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando das pastas novas que organizamos
import Login from './src/screens/Login'; 
import EsqueceuSenha from './src/screens/EsqueceuSenha';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions="{{" headerShown: false }}>
        <Stack.Screen name="Login" component="{Login}"/>
        <Stack.Screen name="EsqueceuSenha" component="{EsqueceuSenha}"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}