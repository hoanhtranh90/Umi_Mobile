import React from 'react';
// import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Stack from './Stack';

const RootStack = createStackNavigator();
// const BotStack = createBottomTabNavigator();

export default function VanBanDi(props) {
  return (
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: true,
        }}>
        <RootStack.Screen
          name={'Stack'}
          component={Stack}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
  );
}
