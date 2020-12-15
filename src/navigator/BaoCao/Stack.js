import React from 'react';
import { StatusBar } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import MenuBaoCao from './MenuBaoCao';
import StackChiTiet from './Stack_ChiTiet'
import THVbDenCn from '../../screens/BaoCao/THVbDenCn'
import THVbDiCn from '../../screens/BaoCao/THVbDiCn'
// import HomeCt from '../../screens/Work/HomeCt'
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
        name={'MenuBaoCao'}
        component={MenuBaoCao}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'StackChiTiet'}
        component={StackChiTiet}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
                name={'THVbDenCn'}
                component={THVbDenCn}
                options={{
                    title: 'Tổng hợp văn bản đến',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'THVbDiCn'}
                component={THVbDiCn}
                options={{
                    title: 'Tổng hợp văn bản đi',
                    headerShown: true,
                }}
            /> */}
      {/* <Stack.Screen
        name={'HomeCt'}
        component={HomeCt}
        options={{
          title:'Chi tiết văn bản',
          headerShown: true,
        }}
      />  */}
    </Stack.Navigator>
  );
}
