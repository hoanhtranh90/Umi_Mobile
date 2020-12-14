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

import Icon from 'react-native-vector-icons/Ionicons';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Văn bản đến',
    data: [
      {noidung: 'Chờ xử lý'},
      {noidung: 'Đang xử lý'},
      {noidung: 'Đã xử lý'},
    ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Văn bản đi',
    data: [
      {noidung: 'Chờ xử lý'},
      {noidung: 'Văn bản dự thảo'},
      {noidung: 'Văn bản đã ban hành'},
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Lịch họp',
    data: [
      {noidung: 'Lịch họp hàng ngày'},
      {noidung: 'Lịch họp ngày mai'},
      {noidung: 'Lịch họp trong tuần'},
    ],
  },
  {
    id: '58694a0f-3da3-471f-bd96-145571e29d72',
    title: 'Hồ sơ công việc',
    data: [{noidung: 'Hồ sơ đang xử lý'}],
  },
];

const Home1 = ({navigation}) => {
  const renderItem1 = (item) => {
    return (
      <View
        style={{
          height: 57,
          backgroundColor: '#ffffff',
          flex: 1,
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <Image
          style={{width: 30, height: 30, marginTop: 6}}
          source={{
            uri: 'https://img.icons8.com/windows/2x/libre-office-suite.png',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            paddingBottom: 5,
            paddingLeft: 10,
            textAlignVertical: 'center',
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#ebebeb',
          }}>
          {item.noidung}
        </Text>
      </View>
    );
  };
  const enderItem = (item) => {
    return (
      <View>
        <Text style={{marginLeft: 8, height: 35, textAlignVertical: 'center'}}>
          {item.title}
        </Text>
        <FlatList data={item.data} renderItem={({item}) => renderItem1(item)} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
<View style={styles.headerBar}>
        <View >
        <Icon.Button name="ios-menu" size={30} backgroundColor="#1094F4" onPress={() => navigation.openDrawer()}></Icon.Button>
        </View>
        <View>
          <Text style={{paddingRight: 25, paddingTop: 10, fontSize: 18}}>
            Trang chủ
          </Text>
        </View>
        <View />
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => enderItem(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    flex: 1,
  },
  headerBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#1094F4',
    flexDirection: 'row',
    flex: 0,
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home1;
