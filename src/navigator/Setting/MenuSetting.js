import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function MenuSetting({ navigation }) {
    return (
        <>
            <View style={styles.headerBar}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingRight: 50, paddingTop: 10, fontSize: 18 }}>
                        Cài đặt
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
                <Text style={styles.title}>Tài khoản</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>

                        <Text style={styles.itemText}>
                            Thông tin cá nhân</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Đổi mật khẩu</Text>
                    </View>

                </View>
            </View>
            <View>
                <Text style={styles.title}>Ứng dụng</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thông tin ứng dụng</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Sắp xếp menu</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thay đổi ngôn ngữ</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thay đổi theme</Text>
                    </View>

                </View>
            </View>
            <View>
                <Text style={styles.title}>Khác</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Chia sẻ</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Góp ý</Text>
                    </View>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Chính sách cài đặt</Text>
                    </View>

                </View>
            </View>
            <View style={styles.screenContainer}>
                <AppButton title="Đăng xuất" size="sm"/>
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
        flex: 0,
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