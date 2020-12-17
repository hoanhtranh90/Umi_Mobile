import React from 'react';
import { StatusBar } from 'react-native';
import {
    createStackNavigator,
    CardStyleInterpolators,
    // TransitionPresets,
} from '@react-navigation/stack';




const Stack = createStackNavigator();
StatusBar.setBarStyle('dark-content');
export default function StackChiTiet() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                headerTitleAlign: 'center',
            }}>

        </Stack.Navigator>
    );
}
