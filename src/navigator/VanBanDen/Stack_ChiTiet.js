import React from 'react';
import { StatusBar } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    // TransitionPresets,
} from '@react-navigation/stack';
import XemLuong from '../screens/Tabbar/XemLuong'
import TheoDoi from '../screens/Tabbar/TheoDoi'
import XinYkien from '../screens/Tabbar/XinYkien'
import ChuyenXuLy from '../screens/Tabbar/ChuyenXuLy'
import TraLai from '../screens/Tabbar/TraLai'
import ThuHoi from '../screens/Tabbar/ThuHoi'
import HomeCt from '../screens/stack/HomeCt'

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
                    title:"Chuyển xử lý",
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
        name={'Tabbar'}
        component={Tabbar}
        options={{
          headerShown: false,
        }}
      /> */}
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
                    title:"Trả lại",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'ThuHoi'}
                component={ThuHoi}
                options={{
                    title:"Thu hồi",
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
