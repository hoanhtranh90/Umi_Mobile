import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header({navigation,title}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Icon name="bars" size={25} backgroundColor="#1094F4" onPress={openMenu} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#1094F4',

        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontSize:18,
        color:'#fff',
        letterSpacing:1,
    },
    icon:{
        color:'#fff',
        position:'absolute',
        left:10
    }
})