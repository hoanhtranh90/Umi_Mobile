import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import DuThao from '../../screens/VanBanDi/DuThao'
import VbChoXuLy from '../../screens/VanBanDi/VbChoXuLy'
import VbDaBanHanh from '../../screens/VanBanDi/VbDaBanHanh'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function TabbarVanBanDi({ navigation }) {
    return (
        <>
            <View style={styles.header}>
            <Icon name="ios-menu" size={30} backgroundColor="#1094F4" onPress={()=>navigation.openDrawer()} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>Văn bản đi</Text>
            </View>
        </View>
        <VanBanDi/>
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
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#1094F4',

        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:18,
        color:'#fff',
        letterSpacing:1,
    },
    icon:{
        color:'#fff',
        position:'absolute',
        left:10
    }
})
