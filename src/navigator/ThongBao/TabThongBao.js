import React, { useState } from 'react';
import { View, Text,StyleSheet, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export default function TabThongBao({ navigation }) {

    return (
        <>
        <StatusBar backgroundColor="#1094F4" barStyle="light-content"></StatusBar>
            <View style={styles.header}>
            <Icon name="ios-menu" size={30} backgroundColor="#1094F4" onPress={()=>navigation.openDrawer()} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>Thông báo</Text>
            </View>
        </View>

            <View><Text>Helo World</Text></View>
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
    },
})
