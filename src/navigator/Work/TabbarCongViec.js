import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import CvDuocGiao from '../../screens/Work/CvDuocGiao'
import GiaoViec from '../../screens/Work/GiaoViec'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function TabbarCongViec({ navigation }) {
    return (
        <>
    <StatusBar backgroundColor="#1094F4" barStyle="light-content"></StatusBar>
             <View style={styles.header}>
            <Icon name="ios-menu" size={30} backgroundColor="#1094F4" onPress={()=>navigation.openDrawer()} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>Công việc</Text>
            </View>
        </View>

            <TabCongViec />
        </>
    )

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

