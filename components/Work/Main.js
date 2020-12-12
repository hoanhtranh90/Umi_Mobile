import 'react-native-gesture-handler';
import React from 'react';
import GiaoViecTab from './menu/GiaoViecTab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
const Stack = createStackNavigator();


function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GiaoViecTab" component={GiaoViecTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default Main;