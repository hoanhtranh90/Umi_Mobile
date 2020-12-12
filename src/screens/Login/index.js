import React from 'react';
import {SafeAreaView, View, StyleSheet, TextInput} from 'react-native';

export default function Login() {
  <SafeAreaView>
    <View style={styles.container}>
      <TextInput placeholder={'Nhập Umi'} />
    </View>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
});
