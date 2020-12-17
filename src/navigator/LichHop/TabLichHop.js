import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export default function TabLichHop({ navigation }) {

    return (
        <>
           <View style={styles.header}>
            <Icon name="ios-menu" size={30} backgroundColor="#1094F4" onPress={()=>navigation.openDrawer()} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>Báo cáo</Text>
            </View>
        </View>

            <View><Text>Agenda here</Text></View>
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
