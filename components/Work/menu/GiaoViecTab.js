import 'react-native-gesture-handler';
import React from 'react';
import CvDuocGiao from './CvDuocGiao'
import GiaoViec from './GiaoViec'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();



function GiaoViecTab() {
  return (
      
        <Tab.Navigator tabBarOptions={{
          labelStyle: { textTransform: 'none' }
        }}>
          <Tab.Screen name="CvDuocGiao" component={CvDuocGiao} options={{title:'Công việc đươc giao'}}/>
          <Tab.Screen name="GiaoViec" component={GiaoViec} options={{title:'Giao việc'}}/>
        </Tab.Navigator>
      
      );
}

export default GiaoViecTab;