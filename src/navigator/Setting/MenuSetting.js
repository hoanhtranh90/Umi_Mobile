import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
const Tab = createMaterialTopTabNavigator();

function MenuSetting(props) {
    console.log(props)
    const { navigation } = props;
    return (
        <>
            <View style={styles.headerBar}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ fontSize: 18, lineHeight: 50, paddingRight: '15%' }}>
                        Cài đặt
          </Text>
                </View>
                <View />
            </View>

            <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#1094F4" barStyle="light-content"></StatusBar>
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

                <TouchableOpacity onPress={()=>props.logOut()}>
                    <View style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
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
    screenContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0
    },
    appButtonContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: 50,
    },
    appButtonText: {
        fontSize: 18,
        color: "red",
        alignSelf: "center",
        lineHeight: 50
    }


})

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch({
                type: "LOG_OUT"
            }
            )
        }
    }
};



export default connect(null, mapDispatchToProps)(MenuSetting);
