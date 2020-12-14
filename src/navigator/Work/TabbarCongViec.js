import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import CvDuocGiao from '../../screens/Work/CvDuocGiao'
import GiaoViec from '../../screens/Work/GiaoViec'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function TabbarCongViec({ navigation }) {
    return (
        <>
            <View style={styles.headerBar}>
                <View >
                    <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
                </View>
                <View>
                    <Text style={{ paddingRight:50, paddingTop: 10, fontSize: 18 }}>
                        Công việc
          </Text>
                </View>
                <View />
            </View>

            <TabCongViec />
        </>
    )

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

