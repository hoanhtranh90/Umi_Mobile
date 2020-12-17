import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import TiepNhan from '../../screens/VanBanDen/TabbarScreen/TiepNhan';
import ChoXuLy from '../../screens/VanBanDen/TabbarScreen/ChoXuLy';
import DangXuLy from '../../screens/VanBanDen/TabbarScreen/DangXuLy';
import DaXuly from '../../screens/VanBanDen/TabbarScreen/DaXuly';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialTopTabNavigator();

export default function VbDenChoXuLy({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const [startDate, setStartDate] = useState((Date.now() / 1000) - 604800 | 0);
  const [endDate, setendDate] = useState(Date.now() / 1000 | 0);


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [pick, setPick] = useState(false);

  const showDatePicker = (e) => {
    if (e == 1) setPick(true);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setPick(false)
  };

  const handleConfirm = (date) => {
    if (pick) {
      setStartDate((date - 1) / 1000 | 0)
    }
    else {
      setendDate((date - 1) / 1000 | 0)
    }
    hideDatePicker();
  };




  return (
    <>
      <View>
        <StatusBar backgroundColor="#1094F4" barStyle="light-content"></StatusBar>
        <Modal visible={showModal}
          transparent={true}
        >
          <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
            <View style={styles.modal}>
              <View style={styles.modalInner}>
                <TouchableOpacity onPress={() => showDatePicker(1)}>
                  <View style={styles.modalItem}>
                    <Text>Từ ngày</Text>
                    <Text>{moment.unix(startDate).format('DD/MM/YYYY')}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showDatePicker(2)}>
                  <View style={styles.modalItem}>
                    <Text>Đến ngày</Text>
                    <Text>{moment.unix(endDate).format('DD/MM/YYYY')}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.modalItemBt} ><Button title="Đồng ý" onPress={() => setShowModal(false)} /></View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <View style={styles.container}>
        <View>
          <Icon name="bars" size={25} style={styles.icon} onPress={() => navigation.openDrawer()}></Icon>
        </View>
        <View>
          <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>Văn bản đến</Text>
          <Text style={{textAlign:'center',color:'#fff'}}>
            Từ {moment.unix(startDate).format('DD/MM/YYYY')} đến {moment.unix(endDate).format('DD/MM/YYYY')}
          </Text>
        </View>
        <View>
          <Icon name="calendar-minus" size={25} style={styles.icon} backgroundColor="#1094F4" onPress={() => setShowModal(true)}></Icon>
        </View>
      </View>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <VbDenChoXuLy1 />


    </>
  );
}
function VbDenChoXuLy1() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: { textTransform: 'none' }
      }}>
      <Tab.Screen name="TiepNhan" component={TiepNhan} options={{ title: 'Tiếp nhận' }} />
      <Tab.Screen name="ChoXuLy" component={ChoXuLy} options={{ title: 'Chờ xử lý' }} />
      <Tab.Screen name="DangXuLy" component={DangXuLy} options={{ title: 'Đang xử lý' }} />
      <Tab.Screen name="DaXuly" component={DaXuly} options={{ title: 'Đã xử lý' }} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1094F4',
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
  },
  icon:{
    color:'#fff',
    padding:10
  },
  modalItem: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'

  },
  modalItemBt: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 7,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  },
  modal: {
    flex: 1,
    paddingTop: "13%",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 150,
    backgroundColor: '#FFF',
  },
  title:{
    
  }
});