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
            <View style={styles.headerBar}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingRight:55, paddingTop: 13, fontSize: 18 }}>
                        Văn bản đi
          </Text>
                </View>
                <View />
            </View>
            <VanBanDi />
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
    headerBar: {
      height: 50,
      width: '100%',
      backgroundColor: '#1094F4',
      flexDirection: 'row',
      flex: 0,
      justifyContent: 'space-between',
    },
})
