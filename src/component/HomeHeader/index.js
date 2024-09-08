import React from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import Imaages from "../../constant/Images";
import Search from "../../constant/CustomSearch";
const HomeHeader = () => {
    return (
        <View style={style.mainSection}>
            <View style={style.subMainSection}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={Imaages.Account} />
                    </View>
                    <View style={style.nameSection}>
                        <Text style={style.nameText}>OI, Jairo</Text>
                        <Text style={style.subNameText}>São Paulo</Text>
                    </View>
                </View>
                <View>
                    <Image source={Imaages.Like} />
                </View>
            </View>
            <Search />
        </View>
    )
}
export default HomeHeader;
const style = StyleSheet.create({
    mainSection: {
        backgroundColor: '#D9D9D9',
        // flex: 1,
        paddingVertical:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    subMainSection: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    nameText:{
        fontSize:13,
        color:'#262525',
        fontWeight:'700'
    },
    subNameText:{
        fontSize:12,
        color:'#262525',
        fontWeight:'500'
    },
    nameSection:{
        marginLeft:10
    }

})