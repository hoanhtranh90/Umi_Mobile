import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



export function DrawerContent(props) {

    const paperTheme = useTheme();


    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Sang khac</Title>
                                <Caption style={styles.caption}>@sangnk</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem

                            label="Home"
                            onPress={() => { props.navigation.navigate('Home1') }}
                        />
                        <DrawerItem
                            label="Thông báo"
                            onPress={() => { props.navigation.navigate('') }}
                        />
                        <DrawerItem


                            label="Văn bản đến"
                            onPress={() => { props.navigation.navigate('VanBanDen') }}
                        />
                        <DrawerItem
                            label="Văn bản đi"
                            onPress={() => { props.navigation.navigate('VanBanDi') }}
                        />
                        <DrawerItem

                            label="Lịch họp"
                            onPress={() => { props.navigation.navigate('') }}
                        />
                        <DrawerItem

                            label="Công việc"
                            onPress={() => { props.navigation.navigate('CongViec') }}
                        />
                        <DrawerItem

                            label="Báo cáo thống kê"
                            onPress={() => { props.navigation.navigate('BaoCao') }}
                        />
                        <DrawerItem

                            label="Truyền thông"
                            onPress={() => { props.navigation.navigate('TruyenThong') }}
                        />
                        <DrawerItem

                            label="Danh bạ"
                            onPress={() => { props.navigation.navigate('') }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem

                    label="Thiết lập"
                    onPress={() => { props.navigation.navigate('Setting')}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});