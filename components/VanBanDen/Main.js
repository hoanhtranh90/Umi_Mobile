// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import 'react-native-gesture-handler';
import React from 'react';
import VanBanDen_ChoXuLy from './menu/VanBanDen_ChoXuLy';
import HomeChoXuLyCt from './VanBanDen_ChoXuLy_Ct/HomeChoXuLyCt'
import ScreenBottomMenuChoXuLy from './VanBanDen_ChoXuLy_Ct/ScreenBottomMenuChoXuLy/index'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import HomeDangXuLyCt from './VanBanDen_DangXuLy_Ct/HomeDangXuLyCt'
import ScreenBottomMenuDangXuLy from './VanBanDen_DangXuLy_Ct/ScreenBottomMenuDangXuLy/index'

import HomeTiepNhanCt from './TiepNhan_Ct/HomeTiepNhanCt'
import ScreenBottomMenuTiepNhan from './TiepNhan_Ct/ScreenBottomMenuTiepNhan/index'

import HomeDaXuLyCt from './DaXuLy_Ct/HomeDaXyLyCt'
import ScreenBottomMenuDaXuLy from './DaXuLy_Ct/ScreenBottomMenuDaXuLy/index'
const Stack = createStackNavigator();



function Main() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="VanBanDen_ChoXuLy" component={VanBanDen_ChoXuLy} options={{headerShown: false}} />

    <Stack.Screen name="HomeChoXuLyCt" component={HomeChoXuLyCt} options={{title:'Nội dung văn bản'}}/>
    <Stack.Screen name="ScreenBottomMenuChoXuLy" component={ScreenBottomMenuChoXuLy} options={{headerShown: false}} />

    <Stack.Screen name="HomeDangXuLyCt" component={HomeDangXuLyCt} options={{title:'Nội dung văn bản'}}/>
    <Stack.Screen name="ScreenBottomMenuDangXuLy" component={ScreenBottomMenuDangXuLy} options={{headerShown: false}} />

    <Stack.Screen name="HomeTiepNhanCt" component={HomeTiepNhanCt} options={{title:'Nội dung văn bản'}}/>
    <Stack.Screen name="ScreenBottomMenuTiepNhan" component={ScreenBottomMenuTiepNhan} options={{headerShown: false}} />

    <Stack.Screen name="HomeDaXuLyCt" component={HomeDaXuLyCt} options={{title:'Nội dung văn bản'}}/>
    <Stack.Screen name="ScreenBottomMenuDaXuLy" component={ScreenBottomMenuDaXuLy} options={{headerShown: false}} />




    </Stack.Navigator>
    </NavigationContainer>
      );
    
}

export default Main;