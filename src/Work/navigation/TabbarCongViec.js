import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'
import CvDuocGiao from '../screen/stack/CvDuocGiao'
import GiaoViec from '../screen/stack/GiaoViec'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function TabbarCongViec({ navigation }) {
    const [value, onChangeText] = useState('');
    return (
        <>
            <View style={{
                height: 50,
                width: '100%',
                backgroundColor: '#1094F4',
                flexDirection: 'row',
                flex: 0,
                justifyContent: 'space-between'
            }}>
                <View style={{ width: 30 }}>
                    <Button
                        title="O"
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
                <View style={{ alignItems: 'center',width:'50%',paddingTop:10 }}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>Công việc</Text>
                    {/* <TextInput
                        style={{ height: 20,width:"100%", borderColor: 'red', borderWidth: 1,backgroundColor:'#fff',color:'red' }}
                        onChangeText={text => onChangeText(text)}
                        placeholder='Tên công việc'
                        value={value}
                    /> */}
                </View>
                <View><Button
                    title="+"
                    onPress={() => navigation.openDrawer()}
                /></View>
            </View>


            <TabCongViec />
        </>
    )
}
function TabCongViec() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="CvDuocGiao" component={CvDuocGiao} options={{ title: "Công việc được giao" }} />
            <Tab.Screen name="GiaoViec" component={GiaoViec} options={{ title: "Giao việc" }} />
            <Tab.Screen name="DvDangKy" component={GiaoViec} options={{ title: "Công việc đăng ký" }} />
        </Tab.Navigator>

    );
}
