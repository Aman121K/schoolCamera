import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import SubHeader from "../../../../component/subHeader"; // Typo fixed
import Images from "../../../../constant/Images";
import { useNavigation } from "@react-navigation/native";
import Search from "../../../../constant/CustomSearch";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../../constant/Dimensions";
import { fontFamilies } from "../../../../constant/fontsFamilies";

const AllCamera = () => {
    const navigation = useNavigation();
    const [datas, setDatas] = useState([
        { id: '1', className: 'Classroom 101', status: true },
        { id: '2', className: 'Classroom 102', status: false },
        { id: '3', className: 'Classroom 103', status: true },
        { id: '4', className: 'Classroom 104', status: false },
        { id: '5', className: 'Classroom 105', status: true },
        { id: '6', className: 'Classroom 106', status: true },
        { id: '7', className: 'Classroom 107', status: true }
    ]);

    const onEditIconClick = () => {
        navigation.navigate('CreateCamera');
    };
    const onItemclick = () => {
        navigation.navigate('ViewSingleCamera')
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onItemclick()} style={style.itemContainer}>
                <View>
                    <Text style={style.classNameText}>{item.className}</Text>
                    <Text style={style.stausText}>{item?.status ? 'Active' : 'In active'}</Text>
                    <Text style={style.settings}>Settings</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => onItemclick()}>
                    <Image source={Images.leftIcon} style={style.iconStyle} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={style.mainSection}>
            <SubHeader name="Lista de Câmeras" image={Images.Plus} onEditIconClick={onEditIconClick} />
            <Search />
            <View style={style.schoolSection}>
                <Image source={Images.schoolIcon} style={style.schoolIcon} />
                <Text style={style.schoolName}>Escola Horizonte do Saber</Text>
            </View>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default AllCamera;

const style = StyleSheet.create({
    mainSection: {
        backgroundColor: '#F8F9FF',
        flex: 1
    },
    schoolSection: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: scaleHeight(20)
    },
    schoolName: {
        color: '#000000',
        fontSize: normalizeFont(14),
        fontFamily: fontFamilies.Mulish.semiBold,
        marginLeft: scaleWidth(10)
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: scaleHeight(10),
        borderWidth: .5,
        backgroundColor: 'white',
        marginHorizontal: scaleHeight(20),
        marginVertical: scaleHeight(7),
        borderColor: '#FFFFFF',
        borderRadius: scaleHeight(10)
    },
    classNameText: {
        fontSize: normalizeFont(16),
        fontFamily: fontFamilies.Mulish.regular,
        color: '#333',
        marginTop: scaleHeight(10)
    },
    iconStyle: {
        width: scaleWidth(24),
        height: scaleHeight(24),
        tintColor: 'black'
    },
    schoolIcon: {
        width: scaleWidth(40),
        height: scaleHeight(40)
    },
    stausText: {
        fontSize: normalizeFont(13),
        color: '#28B446',
        fontFamily: fontFamilies.Mulish.regular
    },
    settings: {
        fontFamily: fontFamilies.Mulish.semiBold,
        fontSize: normalizeFont(14),
        color: '#2A3E97'
    }
});