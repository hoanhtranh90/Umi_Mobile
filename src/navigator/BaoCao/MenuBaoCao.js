import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


export default function MenuBaoCao({ navigation }) {
    return (
        <>
            <View style={styles.header}>
            <Icon name="ios-menu" size={30} backgroundColor="#1094F4" onPress={()=>navigation.openDrawer()} style={styles.icon}></Icon>
            <View>
                <Text style={styles.headerText}>Báo cáo</Text>
            </View>
        </View>

            <SafeAreaView style={{ backgroundColor: '#ebebeb' }}>
            <View>
                <Text style={styles.title}>Báo cáo theo cá nhân</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDenCn'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Tổng hợp văn bản đến</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDiCn'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Tổng hợp văn bản đi</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'CvDuocGiaoCn'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Công việc được giao</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'GiaoViecCn'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Giao việc</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'CvDangKyCn'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Công việc đang ký</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.title}>Báo cáo theo đơn vị</Text>
                <View style={{ backgroundColor: '#fff' }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDen'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thông tin ứng dụng</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDen'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Sắp xếp menu</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDen'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thay đổi ngôn ngữ</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('StackChiTiet',{
                        screen:'THVbDen'
                    })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ paddingTop: 5, paddingLeft: 10 }}></Icon>
                        <Text style={styles.itemText}>Thay đổi theme</Text>
                    </View>
                    </TouchableOpacity>

                </View>
            </View>
           
        </SafeAreaView>
        </>
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
    },
    item: {
        height: 40,
        flex: 0,
        flexDirection: 'row',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    itemText: {
        paddingTop: 8,
        paddingLeft: 8,
        fontSize: 16
    },
    screenContainer: {
        flex: 0,
        paddingTop: '50%'
    },
    appButtonContainer: {
        backgroundColor: '#fff',
        height: 50,
        paddingTop: 10
    },
    appButtonText: {
        fontSize: 18,
        color: "red",
        alignSelf: "center",
    }


})
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);