// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import React from 'react';
import TiepNhan from './TiepNhan';
import DangXuLy from './DangXuLy';
import ChoXuLy from './ChoXuLy';
import DaXuly from './DaXuly';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
const Tab = createMaterialTopTabNavigator();



function VbDenChoXuLy() {
  return (
      
        <Tab.Navigator tabBarOptions={{
          labelStyle: { textTransform: 'none' }
        }}>
          <Tab.Screen name="TiepNhan" component={TiepNhan} options={{title:'Tiếp nhận'}}/>
          <Tab.Screen name="ChoXuLy" component={ChoXuLy} options={{title:'Chờ xử lý'}} />
          <Tab.Screen name="DangXuLy" component={DangXuLy} options={{title:'Đang xử lý'}} />
          <Tab.Screen name="DaXuly" component={DaXuly} options={{title:'Đã xử lý'}} />
        </Tab.Navigator>
      
      );
}

export default VbDenChoXuLy;