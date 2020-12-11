import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../container/Home/index';

const BotStack = createBottomTabNavigator();
StatusBar.setBarStyle('dark-content');
export default function TabbarUser() {
  return (
    <BotStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <BotStack.Screen
        name={'Trang chủ'}
        component={Home}
        options={({route}) => ({
          tabBarLabel: 'Trang chủ',
        })}
      />
    </BotStack.Navigator>
  );
}
