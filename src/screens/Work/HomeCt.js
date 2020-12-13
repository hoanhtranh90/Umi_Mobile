import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar, Group } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const HomeCt = ({ route, navigation }) => {
    const datax = route ? route.params : null;

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Thông tin văn bản',
            kihieu: datax.kihieu,
            trichyeu: datax.nguoiKy,
            nguoiKy: datax.nguoiKy
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Tệp đính kèm',

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Thông tin xử lý'
        }
    ];

    const style = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0

        },
        item: {
            height: 50,
            width: '20%',
            backgroundColor: '#fff',
            borderLeftWidth: 1,
            borderLeftColor: '#ebebeb'
        },

        containerTN_DXL:{
            width:'100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent:'center',
            position: 'absolute',
            bottom: 0
        },
        itemTN_DXL:{
            height: 50,
            width: 100,
            backgroundColor: '#fff',
            borderLeftWidth: 1,
            borderLeftColor: '#ebebeb'
        },

        text: {
            textAlign: 'center',
            paddingTop: 15
        },
        thongTinVb: {
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingLeft: 10,
            paddingRight: 10,
            height: '17%',
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#ebebeb'
        },
        textVb: {
            fontSize: 16
        }
    });
    if (datax.screen == 'GiaoViec') {
        return (
            <SafeAreaView>
                <Text>Giao Viec</Text>
            </SafeAreaView>
        );
    }
    else if(datax.screen == 'CvDuocGiao')
    {
        return (
            <SafeAreaView>
                <Text>Cong Viec Duoc Giao</Text>
            </SafeAreaView>
        )
    }
    
}


export default HomeCt;