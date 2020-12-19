/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './Home'
import SignInScreen from '../screens/Auth/SignInScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux'
import { ActivityIndicator, StatusBar, View } from 'react-native';

const Stack = createStackNavigator();


const Index = (props) => {
  const { loginSuccess,isLoading } = props


  if (isLoading) {
    return (
      <>
        <StatusBar backgroundColor='#fff' />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#1094F4" />
        </View>
      </>
    );
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {
            loginSuccess ?
              <Stack.Screen name="Home" component={Home} /> :
              <Stack.Screen name="SignInScreen" component={SignInScreen} />

          }
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const mapDispatchToProps = {

};

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.authen.loginSuccess,
    isLoading:state.authen.isLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
