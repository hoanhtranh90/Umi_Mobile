import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import VanBanDenChoXuLy from './VanBanDenChoXuLy'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export default function THVbDen_TongSoCvDuocGiao({ navigation }) {
 
  return (
    <>
      <View style={styles.container}>
        <View>
          <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.goBack()}></Icon.Button>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Văn bản đến</Text>
        </View>

        <View></View>
      </View>

      <Tabbar />


    </>
  );
}
function Tabbar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: { textTransform: 'none' }
      }}>
      <Tab.Screen name="VanBanDen" component={VanBanDenChoXuLy} options={{ title: 'Chờ xử lý' }} />
      <Tab.Screen name="ChoXuLy" component={VanBanDenChoXuLy} options={{ title: 'Tiếp nhận văn bản' }} />
      <Tab.Screen name="DangXuLy" component={VanBanDenChoXuLy} options={{ title: 'Đang xử lý' }} />
      <Tab.Screen name="DaXuly" component={VanBanDenChoXuLy} options={{ title: 'Đã xử lý' }} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#1094F4',
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
  },
  button: { width: 30 },
  viewTitle: { alignItems: 'center' },
  title: { paddingTop: 5, fontSize: 16, color: '#fff' },
  startTime: { color: '#d3d3d3' },
  touchable: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
  },
  pick: { paddingHorizontal: 16, color: 'black' },
  modalItem: {
    height: 50,
    flexDirection:'row',
    justifyContent:'space-between',
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'

  },
  modalItemBt:{
    height: 50,
    flexDirection:'row',
    justifyContent:'flex-end',
    width: '100%',
    padding: 7,
    paddingRight:15,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  },
  modal: {
    flex: 1,
    paddingTop: "13%",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 150,
    backgroundColor: '#FFF',
  },
});