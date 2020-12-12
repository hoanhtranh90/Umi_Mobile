import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar, Group } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()
let check = true;
// const HomeCt = ({ navigation }) => {

//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="HomeCt1" component={HomeCt1} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     )
// }
const HomeTiepNhanCt = ({ route, navigation }) => {
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
            width:'100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent:'center',
            position: 'absolute',
            bottom: 0

        },
        item: {
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


    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: '#ebebeb', flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
            <View style={{ height: '60%' }}>
                <Text style={{ lineHeight: 40, fontSize: 16, paddingLeft: 10 }}>{DATA[0].title}</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Kí hiệu</Text>
                        <Text style={style.textVb}>{DATA[0].kihieu}</Text>
                    </View>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Trích yếu</Text>
                        <Text style={style.textVb}>{DATA[0].trichyeu}</Text>
                    </View>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Ngày ban hành</Text>
                        <Text style={style.textVb}>00/00/0000</Text>
                        {/* <Text>{DATA[0].ngaybanhanh}</Text> */}
                    </View>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Ngày đến</Text>
                        <Text style={style.textVb}>00/00/0000</Text>
                    </View>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Hẹn trả lời</Text>
                        <Text style={style.textVb}>00/00/0000</Text>
                    </View>
                    <View style={style.thongTinVb}>
                        <Text style={style.textVb}>Hẹn trả lời bằng số</Text>
                        <Text style={style.textVb}>1 ngày</Text>
                    </View>

                </View>
            </View>
            <View>
                <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 10, paddingTop: "4%" }}>{DATA[1].title}</Text>
                <View style={{ height: 50, backgroundColor: '#fff', paddingLeft: 10 }}>
                    <Text>Helo</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 10, paddingTop: "2%" }}>{DATA[2].title}</Text>
                <View style={{ height: 50, backgroundColor: '#fff', paddingLeft: 10 }}>
                    <Text>Helo</Text>
                </View>
            </View>

            <View style={style.container}>
                <View style={style.item}><Text style={style.text} onPress={
                    () => {
                        check = false

                        navigation.navigate('ScreenBottomMenuDangXuLy', {
                            screen: 'XemLuong'
                        })
                    }
                }>Xem luồng</Text></View>
                <View style={style.item}><Text style={style.text} onPress={
                    () => {
                        check = false

                        navigation.navigate('ScreenBottomMenuDangXuLy', {
                            screen: 'ThuHoi'
                        })
                    }
                }>Thu hồi</Text></View>
              
            </View>
        </SafeAreaView>
    );
}


export default HomeTiepNhanCt;