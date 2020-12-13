import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ChuyenXuLy = ({navigation}) => {
  const onChangeTo = () => {
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onChangeTo}>
        <Text>ChuyenXuLy</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ChuyenXuLy;
