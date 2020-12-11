import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../container/Login/index';

import umiStack from './umiStack';
const RootStack = createStackNavigator();
export default function Navigator(props) {
  const {loginSuccess} = props;
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        {!loginSuccess ? (
          <>
            <RootStack.Screen
              name={'Login'}
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <RootStack.Screen name={'umi Stack'} component={umiStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
