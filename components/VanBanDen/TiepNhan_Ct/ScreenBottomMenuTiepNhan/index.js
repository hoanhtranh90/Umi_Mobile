import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import XemLuong from './XemLuong'
import ThuHoi from './ThuHoi'
const Stack = createStackNavigator();



const ScreenBottomMenuTiepNhan = ({ route }) => {
    let data = route ? route.params.screen : null;
    console.log(data)

    if (data == "XemLuong") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='XemLuong' component={XemLuong}
                options={{
                    title: 'Xem luồng',
                    headerStyle: {
                        backgroundColor: '#529ce5',
                    },


                }} />
            </Stack.Navigator>
        )
    }
    else if (data == "ThuHoi") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='ThuHoi' component={ThuHoi}
                options={{
                    title: 'Thông tin thu hồi',
                    headerStyle: {
                        backgroundColor: '#529ce5',
                    },


                }} />
            </Stack.Navigator>
        )
    }
}

export default ScreenBottomMenuTiepNhan;