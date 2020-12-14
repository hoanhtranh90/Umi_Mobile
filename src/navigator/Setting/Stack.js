import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import MenuSetting from './MenuSetting';
import Stack_ChiTiet from './Stack_ChiTiet'
const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content');
export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
      }}>

      <Stack.Screen
        name={'MenuSetting'}
        component={MenuSetting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'Stack_ChiTiet'}
        component={Stack_ChiTiet}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
