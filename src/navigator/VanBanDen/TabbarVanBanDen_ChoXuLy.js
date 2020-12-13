import React,{useState} from 'react';
import { View, Text,Button } from 'react-native'
import TiepNhan from '../screens/stack/TiepNhan'
import ChoXuLy from '../screens/stack/ChoXuLy'
import DangXuLy from '../screens/stack/DangXuLy'
import DaXuly from '../screens/stack/DaXuly'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function VbDenChoXuLy({ navigation }) {
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
                <View style={{alignItems:'center'}}>
                    <Text style={{ paddingTop: 5, fontSize: 16,color:'#fff' }}>Văn bản đến</Text>
                    <Text style={{color:'#d3d3d3'}}>từ 00/00/0000 đến 00/00/0000</Text>
                </View>
                <View><Button
                        title="D"
                        onPress={() => navigation.openDrawer()}
                    /></View>
            </View>


            <VbDenChoXuLy1 />
        </>
    )
}
function VbDenChoXuLy1() {
    return (

        <Tab.Navigator tabBarOptions={{
            scrollEnabled:true
        }}>
            <Tab.Screen name="TiepNhan" component={TiepNhan} />
            <Tab.Screen name="ChoXuLy" component={ChoXuLy} />
            <Tab.Screen name="DangXuLy" component={DangXuLy} />
            <Tab.Screen name="DaXuly" component={DaXuly} />
        </Tab.Navigator>

    );
}
