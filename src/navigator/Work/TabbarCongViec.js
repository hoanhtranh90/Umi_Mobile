import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import CvDuocGiao from '../../screens/Work/CvDuocGiao'
import GiaoViec from '../../screens/Work/GiaoViec'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function TabbarCongViec({ navigation }) {
    const [value, onChangeText] = useState('');
    return (
        <>


            <TabCongViec />
        </>
    )
}
function TabCongViec() {
    return (

        <Tab.Navigator
            tabBarOptions={{
                scrollEnabled: true,
                labelStyle: { textTransform: 'none' }
            }}>
            <Tab.Screen name="CvDuocGiao" component={CvDuocGiao} options={{ title: "Công việc được giao" }} />
            <Tab.Screen name="GiaoViec" component={GiaoViec} options={{ title: "Giao việc" }} />
            <Tab.Screen name="DvDangKy" component={GiaoViec} options={{ title: "Công việc đăng ký" }} />
        </Tab.Navigator>

    );
}
