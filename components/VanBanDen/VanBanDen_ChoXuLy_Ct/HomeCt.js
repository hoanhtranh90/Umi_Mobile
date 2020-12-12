import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar, Group } from 'react-native';





const HomeCt = ({ route, navigation }) => {
    const datax = route ? route.params :null;

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Thông tin văn bản',
            kihieu: datax.kihieu,
            trichyeu: datax.title,
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





    // const renderItem1 = (item) => {
    //     return (
    //         <View style={{ height: 57, backgroundColor: '#ffffff', flex: 1, flexDirection: 'row', paddingTop: 10 }}>


    //             <Image
    //                 style={{ width: 30, height: 30, marginTop: 6 }}
    //                 source={{
    //                     uri: 'https://img.icons8.com/windows/2x/libre-office-suite.png',
    //                 }}
    //             />
    //             <Text style={{ fontSize: 16, paddingBottom: 5, paddingLeft: 10, textAlignVertical: 'center', width: '100%', borderBottomWidth: 1, borderBottomColor: '#ebebeb' }}>

    //                 {item.noidung}</Text>

    //         </View>

    //     )
    // }
    const enderItem = (item) => {
        return (

            <View>
                <Text style={{ marginLeft: 8, height: 35, textAlignVertical: 'center' }}>{item.title}</Text>
            </View>

        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    enderItem(item)
                )}
            />
            <Text>{DATA[0].nguoiKy}</Text>
        </SafeAreaView>
    );
}


export default HomeCt;