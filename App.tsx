/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  StyleSheet,
} from 'react-native';
import useLoginHooks from '@/utils/login/hooks';
import useLibraryHooks from '@/utils/library/hooks';
import CalculateView from '@/views/CalculateView';
import LoginView from '@/views/LoginView';
import LibraryView from '@/views/LibraryView';
import AuthenticateContext from '@/context/AuthenticateContext';
import LibraryContext from '@/context/LibraryContext';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const { username, setUsername, password, setPassword, isAuthenticated, handleSubmit, handleLogout } = useLoginHooks();
  const { listImages, lastImage } = useLibraryHooks();
  
  return (
    <AuthenticateContext.Provider value={{ username, setUsername, password, setPassword, isAuthenticated, handleSubmit, handleLogout }}>
      <LibraryContext.Provider value={{ listImages, lastImage }}>
        <NavigationContainer>
          {!isAuthenticated ? (
            <Stack.Navigator>
                <Stack.Screen name="LoginView" component={LoginView} /> 
            </Stack.Navigator>
          ) : (
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let icon = lastImage !== '' ? { uri: lastImage } : require('@/assets/logo.png');
              if (route.name === 'Calculate') {
                icon = require('@/assets/calculator.png');
              }
              return <Image source={icon} resizeMode="contain" style={{ aspectRatio: 1, flex: 1, marginTop: 5 }} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <Tab.Screen name="Calculate" component={CalculateView} />
            <Tab.Screen name="Library" component={LibraryView} /> 
          </Tab.Navigator>
        )}
        </NavigationContainer>
      </LibraryContext.Provider>
    </AuthenticateContext.Provider>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'grey',
  }
});

export default App;
