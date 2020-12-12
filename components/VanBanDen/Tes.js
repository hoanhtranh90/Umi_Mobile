// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import React from 'react';
import VanBanDen_ChoXuLy from './menu/VanBanDen_ChoXuLy';
import HomeCt from './VanBanDen_ChoXuLy_Ct/HomeCt'
import ScreenBottomMenuChoXuLy from './VanBanDen_ChoXuLy_Ct/ScreenBottomMenuChoXuLy/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator();



function Tes() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="VanBanDen_ChoXuLy" component={VanBanDen_ChoXuLy} options={{headerShown: false}} />
    <Stack.Screen name="HomeCt" component={HomeCt}/>
    <Stack.Screen name="ScreenBottomMenuChoXuLy" component={ScreenBottomMenuChoXuLy} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
      );
    
}

export default Tes;