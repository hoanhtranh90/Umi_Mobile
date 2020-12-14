import React from 'react';
import {StatusBar} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  // TransitionPresets,
} from '@react-navigation/stack';
import Share from '../../screens/Setting/Share'
import ChangeLang from '../../screens/Setting/ChangeLang'
import ChangePass from '../../screens/Setting/ChangePass'
import Info from '../../screens/Setting/Info'
import InfoApp from '../../screens/Setting/InfoApp'

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
        name={'Share'}
        component={Share}
        options={{
          title: 'Chia sẻ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'ChangeLang'}
        component={ChangeLang}
        options={{
          title: 'Thay đổi ngôn ngữ',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'ChangePass'}
        component={ChangePass}
        options={{
          title: 'Đổi mật khẩu',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'Info'}
        component={Info}
        options={{
          title: 'Thông tin cá nhân',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'InfoApp'}
        component={InfoApp}
        options={{
          title: 'Thông tin ứng dụng',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
