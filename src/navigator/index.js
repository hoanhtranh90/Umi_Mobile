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
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux'

const Stack = createStackNavigator();


const Index = (props) => {
    const {loginSuccess} =props
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      
      {
      !loginSuccess ? <Stack.Screen name="SignInScreen" component={SignInScreen} /> :
      <Stack.Screen name="Home" component={Home}  /> 
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

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index);
