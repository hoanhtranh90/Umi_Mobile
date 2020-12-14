import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Modal, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const HomeCt = ({ route, navigation }) => {
    const datax = route ? route.params : null;
    const [show,setShow] = useState(false)
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

        containerTN_DXL: {
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'absolute',
            bottom: 0
        },
        itemTN_DXL: {
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
        },
        modalItem: {
            height: 50,
            flexDirection:'row',
            justifyContent:'space-between',
            width: '100%',
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#ebebeb'
        
          },
          modalItemBt:{
            height: 50,
            flexDirection:'row',
            justifyContent:'flex-end',
            width: '100%',
            padding: 7,
            paddingRight:15,
            borderBottomWidth: 1,
            borderBottomColor: '#ebebeb'
          },
          modal: {
            flex: 1,
            justifyContent:'flex-end',
            paddingBottom:'13%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          modalInner: {
            height: 150,
            backgroundColor: '#FFF',
          },
    });
    if (datax.screen == 'ChoXuLy') {
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

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XemLuong'
                            })
                        }
                    }>Xem luồng</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'TheoDoi'
                            })
                        }
                    }>Theo dõi</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {


                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'TraLai'
                            })
                        }
                    }>Trở lại</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {


                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XinYkien'
                            })
                        }
                    }>Xin Ý kiến</Text></View>
                    <View style={style.item}>
                        <View>
                            <Modal visible={show}
                                transparent={true}
                                onRequestClose={() => setShow(false)}
                                closeOnClick={true}
                            >
                                <TouchableWithoutFeedback onPress={()=>setShow(false)}>
                                <View style={style.modal} > 
                                
                                    <View style={style.modalInner} >
                                        <TouchableOpacity onPress={() => onSetShowStart()}>
                                            <View style={style.modalItem}>
                                                <Text>Chuyển xử lý</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { }}>
                                            <View style={style.modalItem}>
                                                <Text>Hoàn thành</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => { }}>
                                            <View style={style.modalItem}>
                                                <Text>Nhận để biết</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                </TouchableWithoutFeedback>
                            </Modal>
                        </View>
                        <TouchableOpacity onPress={()=>setShow(true)}>
                        <Text style={style.text}>thêm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    else if (datax.screen == 'DaXuLy') {
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

                <View style={style.containerTN_DXL}>
                    <View style={style.itemTN_DXL}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XemLuong'
                            })
                        }
                    }>Xem luồng</Text></View>
                    <View style={style.itemTN_DXL}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'TheoDoi'
                            })
                        }
                    }>Theo dõi</Text></View>

                </View>
            </SafeAreaView>
        )
    }
    else if (datax.screen == "DangXuLy") {
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

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XemLuong'
                            })
                        }
                    }>Xem luồng</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'TheoDoi'
                            })
                        }
                    }>Theo dõi</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'ThuHoi'
                            })
                        }
                    }>Thu hồi</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XinYKien'
                            })
                        }
                    }>Xin Ý KiếN</Text></View>
                    <View style={style.item}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'ChuyenXuLy'
                            })
                        }
                    }>Chuyển xử lý</Text></View>
                </View>



            </SafeAreaView>
        )
    }
    else if (datax.screen == 'TiepNhan') {
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

                <View style={style.containerTN_DXL}>
                    <View style={style.itemTN_DXL}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'XemLuong'
                            })
                        }
                    }>Xem luồng</Text></View>
                    <View style={style.itemTN_DXL}><Text style={style.text} onPress={
                        () => {

                            navigation.navigate('Stack_ChiTiet', {
                                screen: 'TheoDoi'
                            })
                        }
                    }>Theo dõi</Text></View>
                </View>


            </SafeAreaView>
        )
    }
}


export default HomeCt;