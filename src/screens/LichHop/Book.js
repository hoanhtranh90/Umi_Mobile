import React, {useState, useEffect} from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
  Button,
  Platform,
} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Book = (props) => {
  const {navigation, token} = props;
//   useEffect(() => {
//     listRoom({token});
//   }, []);
  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  const renderEmptyItem = () => {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned</Text>
      </View>
    );
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <View>
          <Text style={styles.itemDurationText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const item = {
    '2020-11-28': {day: '2020-11-28', selected: true},
    '2020-12-23': [
      {name: 'item 2 - any js object', height: 80},
      {name: 'item 3 - any js object', height: 80},
    ],
    '2020-11-24': [],
    '2020-11-25': [{name: 'item 3 - any js object'}],
    '2020-11-01': [{name: 'item 1 - any js object'}],
    '2020-11-02': [{name: 'item 2 - any js object', height: 80}],
    '2020-11-03': [],
    '2020-12-04': [{name: 'item 3 - any js object'}],
  };
  const onMoveToEvent = () => {
    // console.log('----- < > __');
    // navigation.navigate('Sự kiện mới');
  };
  const buttonIcon = () => {
    // return <Image source={imgs.add} style={styles.add} />;
    return <Icon name="bars" size={25} backgroundColor="#1094F4"  style={styles.icon} />
  };
  return (
    <>
      {/* <BarStatus /> */}
      {/* <HeaderAccount /> */}
      <View style={styles.header}>
        <View style={styles.week}>
          <Text style={styles.txtHeader}>Lịch tuần</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.txtHeader}>Lịch ngày</Text>
        </View>
        <View style={styles.meeting}>
          <Text style={styles.txtHeader}>Phòng họp</Text>
        </View>
      </View>
      <Agenda
        items={item}
        firstDay={1}
        selected={moment().format('YYYY-MM-DD')}
        renderItem={renderItem}
        rowHasChanged={rowHasChanged}
        renderEmptyData={renderEmptyItem}
      />

      {/* <Calendar
        minDate={_today}
        maxDate={_maxDate}
        // hideArrows={true}

        onDayPress={onDaySelect}
        markedDates={_markedDates}
      /> */}

    </>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginTop: 32,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 320,
  },
  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8ecf0',
  },
  emptyItemText: {
    color: '#79838a',
    fontSize: 14,
  },
  txtHeader: {
    textAlign: 'center',
  },
  meeting: {
    width: '25%',
    height: 48,
    borderBottomRightRadius: 23,
    borderTopRightRadius: 23,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
  },
  day: {
    width: '25%',
    height: 48,
    backgroundColor: '#008aee',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
  },
  week: {
    width: '25%',
    height: 48,
    borderBottomLeftRadius: 23,
    borderTopLeftRadius: 23,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 27,
  },
  img: {
    tintColor: '#008aee',
  },
  meeting: {tintColor: '#008aee'},
  add: {
    alignSelf: 'center',
    height: 16,
    width: 16,
  },
});
export default Book;