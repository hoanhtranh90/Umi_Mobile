import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
    return (
        <>
            <View style={styles.headerBar}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ fontSize: 18,lineHeight:50,paddingRight:'15%'}}>
                        Truyền thông nội bộ
          </Text>
                </View>
                <View />
            </View>

            <MenuSt />
        </>
    )

}

function MenuSt() {
    return (

        <SafeAreaView style={{ backgroundColor: '#ebebeb' }}>
            <View>
               <Text>Data api</Text>
            </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    headerBar: {
        height: 50,
        width: '100%',
        backgroundColor: '#1094F4',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        lineHeight: 40,
        fontSize: 14,
        paddingLeft: 5
    },
    item: {
        height: 40,
        flex: 0,
        flexDirection: 'row',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    itemText: {
        paddingTop: 8,
        paddingLeft: 8,
        fontSize: 16
    },
    screenContainer:{
        flex:0,
        paddingTop:'50%'
    },
    appButtonContainer:{
        backgroundColor:'#fff',
        height:50,
        paddingTop:10
    },
    appButtonText: {
        fontSize: 18,
        color: "red",
        alignSelf: "center",
      }
    

})
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);