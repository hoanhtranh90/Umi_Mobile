import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import DuThao from '../../screens/VanBanDi/DuThao'
import VbChoXuLy from '../../screens/VanBanDi/VbChoXuLy'
import VbDaBanHanh from '../../screens/VanBanDi/VbDaBanHanh'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function TabbarVanBanDi({ navigation }) {
    const [value, onChangeText] = useState('');
    return (
        <>

            <VanBanDi />
        </>
    )
}
function VanBanDi() {
    return (

        <Tab.Navigator
            tabBarOptions={{
                scrollEnabled: true,
                labelStyle: { textTransform: 'none' }
            }}>
            <Tab.Screen name="DuThao" component={DuThao} options={{ title: "Dụ thảo" }} />
            <Tab.Screen name="VbChoXuLy" component={VbChoXuLy} options={{ title: "Văn bản chờ xử lý" }} />
            <Tab.Screen name="VbDaBanHanh" component={VbDaBanHanh} options={{ title: "Văn bản đã ban hành" }} />
        </Tab.Navigator>

    );
}
