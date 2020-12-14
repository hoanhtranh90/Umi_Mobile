import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const DuThao = ({navigation}) => {
  const data = [
    {
      title: 'Title Bai Viet 1',
      kihieu: '125/CV-KHf'
    },
    {
      title: 'Title Bai Viet 2',
      kihieu: '125/CV-KHf'
    },
    {
      title: 'Title Bai Viet 3',
      kihieu: '125/CV-KHf'
    }
  ];

  // const render=(item)=>{
  //     return (

  //     )
  // }
  const stylee = StyleSheet.create({
    container: {
      paddingTop: 7,
      height: 90,
      backgroundColor: 'white',
      paddingLeft: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#ebebeb',
    },
    title: {
      fontSize: 17,
      color: '#3495e5',
      paddingBottom: 5,
    },
    nguoiKy: {
      fontWeight: 'bold',
    },
    kihieu: {
      color: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  return (
    <>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity //chuyen tab
              onPress={() =>
                navigation.navigate('HomeCt', {
                  title: item.title,
                  kihieu: item.kihieu,
                  nguoiKy: item.nguoiKy,
                  screen:'DuThao'
                })
              }>
              <View style={stylee.container}>
                <Text style={stylee.title}>{item.title}</Text>
                <View style={stylee.kihieu}>
                  <Text style={{color: '#4f4f4f'}}>
                    Ký hiệu: <Text>{item.kihieu}</Text>{' '}
                  </Text>
                  <Text
                    style={{paddingRight: 10, color: '#4f4f4f', fontSize: 14}}>
                    15/01/2020 : 14:44:40
                  </Text>
                </View>
                
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};
export default DuThao;
