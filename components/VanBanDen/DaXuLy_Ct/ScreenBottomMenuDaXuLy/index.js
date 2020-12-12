import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import XemLuong from './XemLuong'
import TheoDoi from './TheoDoi'
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
}

export default ScreenBottomMenuTiepNhan;