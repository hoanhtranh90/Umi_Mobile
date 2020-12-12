import React from 'react'
import { View,Text } from 'react-native';

const ChuyenXuLy = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

     
return(
    <View>
        <Text>ChuyenXuLy</Text>
    </View>
)
}

export default ChuyenXuLy;