import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import TabbarVanBanDi from './TabbarVanBanDi';
import Stack_ChiTiet from './Stack_ChiTiet'
import HomeCt from '../../screens/VanBanDi/HomeCt'
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
        name={'TabbarVanBanDi'}
        component={TabbarVanBanDi}
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
      <Stack.Screen
        name={'HomeCt'}
        component={HomeCt}
        options={{
          title:'Chi tiết văn bản',
          headerShown: true,
        }}
      /> 
    </Stack.Navigator>
  );
}
