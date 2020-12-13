import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import TiepNhan from '../../screens/VanBanDen/TabbarScreen/TiepNhan';
import ChoXuLy from '../../screens/VanBanDen/TabbarScreen/ChoXuLy';
import DangXuLy from '../../screens/VanBanDen/TabbarScreen/DangXuLy';
import DaXuly from '../../screens/VanBanDen/TabbarScreen/DaXuly';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import moment from 'moment';
import PickerCustom from '../../components/PickerCustom/index';
const Tab = createMaterialTopTabNavigator();

export default function VbDenChoXuLy({navigation}) {
  const [startDate, setStartDate] = useState(new Date());
  const [showStart, setShowStart] = useState(false);
  const [startDateChange, setStartDateChange] = useState(new Date());
  const onHideModal = () => {
    setShowStart(false);
  };

  const onSetShowStart = () => {
    setShowStart(true);
  };
  const onCompleteStart = () => {
    setStartDate(startDateChange);
    setShowStart(false);
  };
  const onChangeDate = (event, selectedDay) => {
    const currentDay = selectedDay || startDateChange;
    setShowStart(Platform.OS === 'ios');
    console.log(currentDay);
    setStartDateChange(currentDay);
  };
  const [endDate, setEndDate] = useState(
    moment(new Date()).format('DD/MM/YYYY'),
  );
  const [endDateChange, setEndDateChange] = useState('');

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="O" onPress={() => navigation.openDrawer()} />
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Văn bản đến</Text>
          <Text style={styles.startTime}>
            Từ {moment(startDate).format('DD/MM/YYYY')} đến {endDate}
          </Text>
        </View>

        <TouchableOpacity style={styles.touchable} onPress={onSetShowStart}>
          <Text style={styles.pick}>Pick</Text>
        </TouchableOpacity>
      </View>
      <PickerCustom
        value={startDateChange}
        onChange={onChangeDate}
        onPress={onCompleteStart}
        mode={'date'}
        show={showStart}
        minimumDate={new Date()}
        onHideModal={onHideModal}
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
      }}>
      <Tab.Screen name="TiepNhan" component={TiepNhan} />
      <Tab.Screen name="ChoXuLy" component={ChoXuLy} />
      <Tab.Screen name="DangXuLy" component={DangXuLy} />
      <Tab.Screen name="DaXuly" component={DaXuly} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '#1094F4',
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
  },
  button: {width: 30},
  viewTitle: {alignItems: 'center'},
  title: {paddingTop: 5, fontSize: 16, color: '#fff'},
  startTime: {color: '#d3d3d3'},
  touchable: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
  },
  pick: {paddingHorizontal: 16, color: 'black'},
});
