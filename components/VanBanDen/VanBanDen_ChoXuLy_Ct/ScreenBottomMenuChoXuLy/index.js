import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ChuyenXuly from './ChuyenXuLy'
import XemLuong from './XemLuong'
import TheoDoi from './TheoDoi'
import TraLai from './TraLai'
import XinYkien from './XinYkien'
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
    else if (data == "TraLai") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='TraLai' component={TraLai}
                    options={{
                        title: 'Trả lại văn bản',
                        headerStyle: {
                            backgroundColor: '#529ce5',
                        },


                    }} />
            </Stack.Navigator>
        )
    }
    else if (data == "ChuyenXuly") {
        return (
            <Stack.Navigator>
                <Stack.Screen name='ChuyenXuly' component={ChuyenXuly}
                options={{
                    title: 'Chuyển xử lý',
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
}

export default ScreenBottomMenuChoXuLy;