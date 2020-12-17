import React,{useState} from 'react';
import VanBanDen from './VanBanDen/index';
import CongViec from './Work/index';
import VanBanDi from './VanBanDi/index'
import Home1 from '../screens/home1';
import Setting from './Setting/index';
import BaoCao from './BaoCao/index';
import TruyenThong from './TruyenThongNoiBo/index';
import ThongBao from './ThongBao//index'
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from './DrawerContent'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LichHop from './LichHop';

import {connect} from 'react-redux'


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();


function MyDrawer(prop) {




  return (
    <Drawer.Navigator initialRouteName="Home1" drawerContent={(props)=><DrawerContent {...props} data={prop.data}/>}>
      <Drawer.Screen
        name='Home1'
        component={Home1}
      />
      <Drawer.Screen
        name="ThongBao"
        component={ThongBao}
      />
      <Drawer.Screen
        name="VanBanDen"
        component={VanBanDen}
      />
      <Drawer.Screen
        name="VanBanDi"
        component={VanBanDi}
      />
      <Drawer.Screen
        name="LichHop"
        component={LichHop}
        options={{ title: 'Lịch họp' }}
      />
      <Drawer.Screen
        name="CongViec"
        component={CongViec}
      />
      <Drawer.Screen
        name="BaoCao"
        component={BaoCao}
        options={{ title: 'Báo cáo thống kê' }}
      />
      <Drawer.Screen
        name="TruyenThong"
        component={TruyenThong}
        options={{ title: 'Truyền thông' }}
      />
      <Drawer.Screen
        name="DanhBa"
        component={Home1}
        options={{ title: 'Danh bạ' }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{ title: 'Cài đặt' }}
      />
      
      {/* <Drawer.Screen
      name="HomeCt"
      component={HomeCt}
      options={{title:'Chi tiết văn bản'}}
      /> */}
    </Drawer.Navigator>
  );
    }

    const mapDispatchToProps = {

    };

const mapStateToProps = (state) => {
    return {
      data:state

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyDrawer);

