import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import XemLuong from '../../screens/VanBanDen/TabbarScreenCt/XemLuong';
import TheoDoi from '../../screens/VanBanDen/TabbarScreenCt/TheoDoi';
import XinYkien from '../../screens/VanBanDen/TabbarScreenCt/XinYkien';
import ChuyenXuLy from '../../screens/VanBanDen/TabbarScreenCt/ChuyenXuLy';
import TraLai from '../../screens/VanBanDen/TabbarScreenCt/TraLai';
import ThuHoi from '../../screens/VanBanDen/TabbarScreenCt/ThuHoi';

const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content');
export default function StackChiTiet() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={'ChuyenXuLy'}
        component={ChuyenXuLy}
        options={{
          title: 'Chuyển xử lý',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'TheoDoi'}
        component={TheoDoi}
        options={{
          title: 'Theo dõi',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'XemLuong'}
        component={XemLuong}
        options={{
          title: 'Xem luồng',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'TraLai'}
        component={TraLai}
        options={{
          title: 'Trả lại',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'ThuHoi'}
        component={ThuHoi}
        options={{
          title: 'Thu hồi',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'XinYkien'}
        component={XinYkien}
        options={{
          title: 'Xin ý kiến',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
