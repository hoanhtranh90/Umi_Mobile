import React from 'react';
import Navigation from './VanBanDen/index';
import CongViec from './Work/index';
import VanBanDi from './VanBanDi/index'
import Home1 from '../screens/home1';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from './DrawerContent'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home1" drawerContent={props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen
        name="Home1"
        component={Home1}
        options={{title: 'Trang chủ'}}
      /> */}
      <Drawer.Screen
        name='Home1'
        component={HomeStackScreen}
      />
      <Drawer.Screen
        name="ThongBao"
        component={HomeStackScreen}
      />
      <Drawer.Screen
        name="VanBanDen"
        component={VanBanDenStackScreen}
      />
      <Drawer.Screen
        name="VanBanDi"
        component={VanBanDiStackScreen}
      />
      <Drawer.Screen
        name="LichHop"
        component={HomeStackScreen}
        options={{ title: 'Lịch họp' }}
      />
      <Drawer.Screen
        name="CongViec"
        component={CongViecStackScreen}
      />
      <Drawer.Screen
        name="BaoCao"
        component={HomeStackScreen}
        options={{ title: 'Báo cáo thống kê' }}
      />
      <Drawer.Screen
        name="TruyenThong"
        component={HomeStackScreen}
        options={{ title: 'Truyền thông' }}
      />
      <Drawer.Screen
        name="DanhBa"
        component={HomeStackScreen}
        options={{ title: 'Danh bạ' }}
      />
    </Drawer.Navigator>
  );
}
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',

  }}>
    <HomeStack.Screen name="Home" component={Home1} options={{
      title: 'Trang chủ',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);
const VanBanDenStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',

  }}>
    <HomeStack.Screen name="VanBanDenStackScreen" component={Navigation} options={{
      title: 'Văn bản đến',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);
const VanBanDiStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',

  }}>
    <HomeStack.Screen name="VanBanDiStackScreen" component={VanBanDi} options={{
      title: 'Văn bản đi',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);
const CongViecStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',

  }}>
    <HomeStack.Screen name="CongViecStackScreen" component={CongViec} options={{
      title: 'Công việc',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

export default MyDrawer;
