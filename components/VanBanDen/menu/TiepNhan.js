import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const TiepNhan = ({ route,navigation }) => {
  const  title  = route ? route.params:null;
  const data = [
    {
        title:"Tiep nhan 1",
        kihieu:"125/CV-KHf",
        nguoiKy:"Sang dz"
    },
    {
        title:"Tiep nhan 2",
        kihieu:"125/CV-KHf",
        nguoiKy:"Sang dz"
    }
]

const render=(item)=>{
    return (
    <View style={stylee.container}>
        <TouchableOpacity //chuyen tab
        onPress={
          () => navigation.navigate('HomeTiepNhanCt',{
            title:item.title,
            kihieu:item.kihieu,
            nguoiKy:item.nguoiKy
          })
        }>
        <Text style={stylee.title}>{item.title}</Text>
        <View style={stylee.kihieu}>
            <Text style={{color:"#4f4f4f"}}>Ký hiệu: <Text>{item.kihieu}</Text> </Text>
            <Text style={{paddingRight:10,color:'#4f4f4f',fontSize:14}}>15/01/2020 : 14:44:40</Text>
        </View>
        <Text style={{color:"#4f4f4f"}}><Text>Người ký: </Text><Text style={stylee.nguoiKy}>{item.nguoiKy}</Text></Text>
        </TouchableOpacity>
    </View>
    )
}
const stylee = StyleSheet.create({
    container: {
        paddingTop:7,
        height: 90,
        backgroundColor:'white',
        paddingLeft:10,
        borderBottomWidth:2,
        borderBottomColor:'#ebebeb'
    },
    title: {
        fontSize:17,
        color:'#3495e5',
        paddingBottom:5
    },
    nguoiKy: {
        fontWeight:'bold'
    },
    kihieu: {
        color:'red',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    
    }
  });
return (
    <>
    <View>
        <FlatList
        data={data}
        renderItem={({ item }) => (
            render(item)
          )}
        />
    </View>
    </>
);
}
export default TiepNhan;