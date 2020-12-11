import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    data: [
      {noidung: 'nội dung 1'},
      {noidung: 'nội dung 2'},
      {noidung: 'nội dung 3'},
      {noidung: 'nội dung 4'},
    ],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    data: [
      {noidung: 'nội dung 1'},
      {noidung: 'nội dung 2'},
      {noidung: 'nội dung 3123'},
      {noidung: 'nội dung 4'},
    ],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    data: [
      {noidung: 'nội dung 1'},
      {noidung: 'nội dung 2'},
      {noidung: 'nội dung 22'},
      {noidung: 'nội dung 4'},
      {noidung: 'nội dung 4'},
      {noidung: 'nội dung 4'},
      {noidung: 'nội dung 4'},
    ],
  },
];

const Home = () => {
  const renderItem1 = ({item}) => {
    return (
      <View>
        <Text>{item.noidung}</Text>
      </View>
    );
  };
  const enderItem = (item) => {
    return (
      <View style={{height: 200}}>
        <Text>{item.title}</Text>
        <FlatList data={item.data} renderItem={({item}) => renderItem1(item)} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Helo</Text>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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

export default Home;
