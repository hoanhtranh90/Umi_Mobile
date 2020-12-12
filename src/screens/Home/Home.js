import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput,Image} from 'react-native';
import {imgs} from '../../../src/utlis/images/imgs'
export default function Home() {
  <SafeAreaView>
    <View style={styles.container}>
      <TextInput placeholder={'Nhập Umi'} />
      <Image source={imgs.home}></Image>
    </View>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
