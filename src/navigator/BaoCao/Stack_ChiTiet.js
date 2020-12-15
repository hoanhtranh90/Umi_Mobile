import React from 'react';
import { StatusBar } from 'react-native';
import CvDangKyCn from '../../screens/BaoCao/CvDangKyCn'
import THVbDenCn from '../../screens/BaoCao/THVbDenCn'
import CvDuocGiaoCn from '../../screens/BaoCao/CvDuocGiaoCn'
import THVbDiCn from '../../screens/BaoCao/THVbDiCn'
import GiaoViecCn from '../../screens/BaoCao/GiaoViecCn'
import THVbDen_TongSoCvDuocGiao from '../../screens/BaoCao/THVbDen_TongSoCvDuocGiao'
import {
    createStackNavigator,
    CardStyleInterpolators,
    // TransitionPresets,
} from '@react-navigation/stack';
const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content');
export default function StackChiTiet() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name={'THVbDenCn'}
                component={THVbDenCn}
                options={{
                    title: 'Tình hình xử lý văn bản đến',
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
            />
            <Stack.Screen
                name={'CvDuocGiaoCn'}
                component={CvDuocGiaoCn}
                options={{
                    title: 'Công việc được giao',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'CvDangKyCn'}
                component={CvDangKyCn}
                options={{
                    title: 'Công việc đăng ký',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'GiaoViecCn'}
                component={GiaoViecCn}
                options={{
                    title: 'Giao việc',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'ThVbDenDv'}
                component={GiaoViecCn}
                options={{
                    title: 'Tổng hợp văn bản đến đơn vị',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'ThVbDiDv'}
                component={GiaoViecCn}
                options={{
                    title: 'Tổng hợp văn bản đi đơn vị',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name={'BaoCaoTongHopDv'}
                component={GiaoViecCn}
                options={{
                    title: 'Báo cáo tổng hợp đơn vị',
                    headerShown: true,
                }}
            />
            
            <Stack.Screen
                name={'THVbDen_TongSoCvDuocGiao'}
                component={THVbDen_TongSoCvDuocGiao}
                options={{
                    title: 'Văn bản đến',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
