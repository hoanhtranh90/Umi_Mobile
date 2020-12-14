import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import TiepNhan from '../../screens/VanBanDen/TabbarScreen/TiepNhan';
import ChoXuLy from '../../screens/VanBanDen/TabbarScreen/ChoXuLy';
import DangXuLy from '../../screens/VanBanDen/TabbarScreen/DangXuLy';
import DaXuly from '../../screens/VanBanDen/TabbarScreen/DaXuly';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function VbDenChoXuLy({navigation}) {
  return (
    <>
      <VbDenChoXuLy1 />
    </>
  );
}
function VbDenChoXuLy1() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: { textTransform: 'none' }
      }}>
      <Tab.Screen name="TiepNhan" component={TiepNhan} options={{title:'Tiếp nhận'}}/>
      <Tab.Screen name="ChoXuLy" component={ChoXuLy} options={{title:'Chờ xử lý'}} />
      <Tab.Screen name="DangXuLy" component={DangXuLy} options={{title:'Đang xử lý'}} />
      <Tab.Screen name="DaXuly" component={DaXuly} options={{title:'Đã xử lý'}} />
    </Tab.Navigator>
  );
}
