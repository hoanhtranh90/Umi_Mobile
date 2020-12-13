// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import React from 'react';
import TiepNhan from './TiepNhan';
import DangXuLy from './DangXuLy';
import ChoXuLy from './ChoXuLy';
import DaXuly from './DaXuly';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();



function VbDenChoXuLy() {
  return (
      
        <Tab.Navigator>
          <Tab.Screen name="TiepNhan" component={TiepNhan} />
          <Tab.Screen name="ChoXuLy" component={ChoXuLy} />
          <Tab.Screen name="DangXuLy" component={DangXuLy} />
          <Tab.Screen name="DaXuly" component={DaXuly} />
        </Tab.Navigator>
      
      );
}

export default VbDenChoXuLy;