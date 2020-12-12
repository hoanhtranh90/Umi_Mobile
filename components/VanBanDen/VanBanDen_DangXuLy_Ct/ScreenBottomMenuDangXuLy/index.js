import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ChuyenXuLy from './ChuyenXuLy'
import XemLuong from './XemLuong'
import TheoDoi from './TheoDoi'
import XinYkien from './XinYkien'
import ThuHoi from './ThuHoi'
const Stack = createStackNavigator();



const ScreenBottomMenuChoXuLy = ({ route }) => {
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
    else if (data == "TheoDoi") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='TheoDoi' component={TheoDoi}
                options={{
                    title: 'Theo dõi',
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
   
    else if (data == "XinYkien") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='XinYkien' component={XinYkien}
                options={{
                    title: 'Xin ý kiến',
                    headerStyle: {
                        backgroundColor: '#529ce5',
                    },


                }} />
            </Stack.Navigator>
        )
    }
    else if (data == "ChuyenXuLy") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='ChuyenXuLy' component={ChuyenXuLy}
                options={{
                    title: 'Chuyển xử lý',
                    headerStyle: {
                        backgroundColor: '#529ce5',
                    },


                }} />
            </Stack.Navigator>
        )
    }
}

export default ScreenBottomMenuChoXuLy;