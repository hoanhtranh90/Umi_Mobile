import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  Group,
  Button,
} from 'react-native';

import Header from '../shared/headerHome'
import Icon from 'react-native-vector-icons/FontAwesome5';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Văn bản đến',
    data: [
      { noidung: 'Chờ xử lý' },
      { noidung: 'Đang xử lý' },
      { noidung: 'Đã xử lý' },
    ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Văn bản đi',
    data: [
      { noidung: 'Chờ xử lý' },
      { noidung: 'Văn bản dự thảo' },
      { noidung: 'Văn bản đã ban hành' },
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lịch họp',
    data: [
      { noidung: 'Lịch họp hàng ngày' },
      { noidung: 'Lịch họp ngày mai' },
      { noidung: 'Lịch họp trong tuần' },
    ],
  },
  {
    id: '58694a0f-3da3-471f-bd96-145571e29d72',
    title: 'Hồ sơ công việc',
    data: [{ noidung: 'Hồ sơ đang xử lý' }],
  },
];

const Home1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title='Trang chủ' />
      <View>
        <Text style={styles.title}>Văn bản đến</Text>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>

            <Text style={styles.itemText}>
              Chờ xử lý</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>
            <Text style={styles.itemText}>Đang xử lý</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>
            <Text style={styles.itemText}>Đã xử lý</Text>
          </View>

        </View>
      </View>
      <View>
        <Text style={styles.title}>Văn bản đi</Text>
        <View style={{ backgroundColor: '#fff' }}>
        <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>

            <Text style={styles.itemText}>
              Văn bản đi</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>

            <Text style={styles.itemText}>
              Văn bản dự thảo</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>
            <Text style={styles.itemText}>Văn bản đã ban hành</Text>
          </View>

        </View>
      </View>
      <View>
        <Text style={styles.title}>Lịch họp</Text>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>

            <Text style={styles.itemText}>
              Lịch họp cá nhân</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>
            <Text style={styles.itemText}>Lịch họp ngày mai</Text>
          </View>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>
            <Text style={styles.itemText}>Lịch họp trong tuần</Text>
          </View>

        </View>
      </View>
      <View>
        <Text style={styles.title}>Hồ sơ công việc</Text>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.item}>
            <Icon name="file" size={25} backgroundColor='black' style={styles.icon}></Icon>

            <Text style={styles.itemText}>
              Hồ sơ đang xử lý</Text>
          </View>
          

        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    height: '100%'
  },
  title: {
    lineHeight: 40,
    fontSize: 14,
    paddingLeft: 5
},
item: {
    height: 50,
    flex: 0,
    flexDirection: 'row',
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1
},
itemText: {
  lineHeight:50,
    paddingLeft: 8,
    fontSize: 16
},
icon: {
  paddingLeft: 10,lineHeight:50
}

});

export default Home1;
