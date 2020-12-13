import React from 'react';
import TiepNhan from '../screens/stack/TiepNhan'
import ChoXuLy from '../screens/stack/ChoXuLy'
import DangXuLy from '../screens/stack/DangXuLy'
import DaXuly from '../screens/stack/DaXuly'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();



export default function VbDenChoXuLy() {
  return (
      
        <Tab.Navigator>
          <Tab.Screen name="TiepNhan" component={TiepNhan} />
          <Tab.Screen name="ChoXuLy" component={ChoXuLy} />
          <Tab.Screen name="DangXuLy" component={DangXuLy} />
          <Tab.Screen name="DaXuly" component={DaXuly} />
        </Tab.Navigator>
      
      );
}
