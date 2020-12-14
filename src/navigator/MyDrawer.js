import React,{useState} from 'react';
import VanBanDen from './VanBanDen/index';
import CongViec from './Work/index';
import VanBanDi from './VanBanDi/index'
import Home1 from '../screens/home1';
import Setting from './Setting/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContent } from './DrawerContent'

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';




const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();


function MyDrawer() {




  return (
    <Drawer.Navigator initialRouteName="Home1" drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name='Home1'
        component={Home1}
      />
      <Drawer.Screen
        name="ThongBao"
        component={Home1}
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
        component={Home1}
        options={{ title: 'Lịch họp' }}
      />
      <Drawer.Screen
        name="CongViec"
        component={CongViec}
      />
      <Drawer.Screen
        name="BaoCao"
        component={Home1}
        options={{ title: 'Báo cáo thống kê' }}
      />
      <Drawer.Screen
        name="TruyenThong"
        component={Home1}
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
// }
// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTitleAlign: 'center',
//     headerTintColor: '#fff',

//   }}>
//     <HomeStack.Screen name="Home" component={Home1} options={{
//       title: 'Trang chủ',
      
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </HomeStack.Navigator>
// );
// const VanBanDenStackScreen = ({ navigation }) => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [showStart, setShowStart] = useState(false);
//   const [startDateChange, setStartDateChange] = useState(new Date());
//   const onHideModal = () => {
//     setShowStart(false);
//   };
  
//   const onSetShowStart = () => {
//     setShowStart(true);
//   };
//   const onCompleteStart = () => {
//     setStartDate(startDateChange);
//     setShowStart(false);
//   };
//   const onChangeDate = (event, selectedDay) => {
//     const currentDay = selectedDay || startDateChange;
//     setShowStart(Platform.OS === 'ios');
//     console.log(currentDay);
//     setStartDateChange(currentDay);
//   };
//   const [endDate, setEndDate] = useState(
//     moment(new Date()).format('DD/MM/YYYY'),
//   );
//   const [endDateChange, setEndDateChange] = useState('');

// return (
//   <HomeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTitleAlign: 'center',
//     headerTintColor: '#fff',

//   }}>
    
//     <HomeStack.Screen name="VanBanDenStackScreen" component={Navigation} options={{
//       title: 'Văn bản đến',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       ),
//       headerRight: () => (
//         <>
//         <Icon.Button name="ios-person" size={25} backgroundColor="#009387" onPress={onSetShowStart}></Icon.Button>

//         <PickerCustom
//           value={startDateChange}
//           onChange={onChangeDate}
//           onPress={onCompleteStart}
//           mode={'date'}
//           show={showStart}
//           minimumDate={new Date()}
//           onHideModal={onHideModal}
//       />
//       </>
//       )
//     }} />
//   </HomeStack.Navigator>
// )
// };
// const VanBanDiStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTitleAlign: 'center',
//     headerTintColor: '#fff',

//   }}>
//     <HomeStack.Screen name="VanBanDiStackScreen" component={VanBanDi} options={{
//       title: 'Văn bản đi',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </HomeStack.Navigator>
// );
// const CongViecStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator screenOptions={{
//     headerStyle: {
//       backgroundColor: '#009387',
//     },
//     headerTitleAlign: 'center',
//     headerTintColor: '#fff',

//   }}>
//     <HomeStack.Screen name="CongViecStackScreen" component={CongViec} options={{
//       title: 'Công việc',
//       headerLeft: () => (
//         <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
//       )
//     }} />
//   </HomeStack.Navigator>
// );

    }
export default MyDrawer;
