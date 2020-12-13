import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import ChoXuly from '../screens/stack/ChoXuLy';
import DangXuLy from '../screens/stack/DangXuLy';
import DaXuly from '../screens/stack/DaXuly';
import HomeCt from '../screens/stack/HomeCt';
import VanBanDen_ChoXuLy from './TabbarVanBanDen_ChoXuLy';
import TiepNhan from '../screens/stack/TiepNhan';
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
        name={'VanBanDen_ChoXuLy'}
        component={VanBanDen_ChoXuLy}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'TiepNhan'}
        component={TiepNhan}
        options={{
          headerShown: true,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name={'DaXuly'}
        component={DaXuly}
        options={{
          headerShown: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'DangXuLy'}
        component={DangXuLy}
        options={{
          headerShown: true,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={'ChoXuly'}
        component={ChoXuly}
        options={{
          headerShown: true,
          gestureEnabled: false,
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
