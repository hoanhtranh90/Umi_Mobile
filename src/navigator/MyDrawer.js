import React from 'react';
import Navigation from './VanBanDen/index';
import CongViec from './Work/index';
import Home1 from '../screens/home1';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home1">
      <Drawer.Screen
        name="Home1"
        component={Home1}
        options={{title: 'Trang chủ'}}
      />
      <Drawer.Screen
        name="ThongBao"
        component={Home1}
        options={{title: 'Thông báo'}}
      />
      <Drawer.Screen
        name="VanBanDen"
        component={Navigation}
        options={{title: 'Văn bản đến'}}
      />
      <Drawer.Screen
        name="VanBanDi"
        component={Navigation}
        options={{title: 'Văn bản đi'}}
      />
      <Drawer.Screen
        name="LichHop"
        component={Navigation}
        options={{title: 'Lịch họp'}}
      />
      <Drawer.Screen
        name="CongViec"
        component={CongViec}
        options={{title: 'Công việc'}}
      />
      <Drawer.Screen
        name="BaoCao"
        component={Navigation}
        options={{title: 'Báo cáo thống kê'}}
      />
      <Drawer.Screen
        name="TruyenThong"
        component={Navigation}
        options={{title: 'Truyền thông'}}
      />
      <Drawer.Screen
        name="DanhBa"
        component={Navigation}
        options={{title: 'Danh bạ'}}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
