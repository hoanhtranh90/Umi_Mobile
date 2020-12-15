import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';

const GiaoViecCn = ({navigation}) => {

    const [startDate, setStartDate] = useState((Date.now() / 1000) - 604800 | 0);
    const [endDate, setendDate] = useState(Date.now() / 1000 | 0);


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [pick, setPick] = useState(false);

    const showDatePicker = (e) => {
        if (e == 1) setPick(true);
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
        setPick(false)
    };

    const handleConfirm = (date) => {
        if (pick) {
            setStartDate((date - 1) / 1000 | 0)
        }
        else {
            setendDate((date - 1) / 1000 | 0)
        }
        hideDatePicker();
    };
    return (
        <>
            <TouchableOpacity onPress={() => showDatePicker(1)}>
                <View style={styles.modalItem}>
                    <Text>Từ ngày</Text>
                    <Text>{moment.unix(startDate).format('DD/MM/YYYY')}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showDatePicker(2)}>
                <View style={styles.modalItem}>
                    <Text>Đến ngày</Text>
                    <Text>{moment.unix(endDate).format('DD/MM/YYYY')}</Text>
                </View>
            </TouchableOpacity>
            <View style={{ paddingTop: '5%' }}>
                <Button title="Tìm kiếm"></Button>
            </View>

            <View style={{ paddingTop: '5%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('', {
                    screen: ''
                })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ lineHeight:60,paddingLeft:15 }}></Icon>
                        <Text style={styles.itemText}>Tổng số công việc được giao</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('', {
                    screen: ''
                })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ lineHeight:60,paddingLeft:15 }}></Icon>
                        <Text style={styles.itemText}>Đã xử lý - đúng hạn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('', {
                    screen: ''
                })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ lineHeight:60,paddingLeft:15 }}></Icon>
                        <Text style={styles.itemText}>Đã xử lý - quá hạn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('', {
                    screen: ''
                })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ lineHeight:60,paddingLeft:15 }}></Icon>
                        <Text style={styles.itemText}>Chưa xử lý - còn hạn</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('', {
                    screen: ''
                })}>
                    <View style={styles.item}>
                        <Icon name="person" size={25} backgroundColor='black' style={{ lineHeight:60,paddingLeft:15 }}></Icon>
                        <Text style={styles.itemText}>Chưa xử lý - quá hạn</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}

const styles = StyleSheet.create({
    modalItem: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb'

    },
    item: {
        height: 60,
        flex: 0,
        flexDirection: 'row',
        borderBottomColor: '#ebebeb',
        borderBottomWidth: 1
    },
    itemText: {
        lineHeight:60,
        paddingLeft:15,
        fontSize: 16
    },
})
export default GiaoViecCn;

