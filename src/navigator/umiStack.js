import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import Home from '../container/Home/index';
import Tabbar from './Tabbar';
const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content');
export default function umiStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={'Tabbar'}
        component={Tabbar}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'Trang chủ'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
