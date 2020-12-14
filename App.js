/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/navigator/Home'
import SignInScreen from './src/screens/Auth/SignInScreen'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home}  />

      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};



export default App;
