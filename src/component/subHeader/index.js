import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Imaages from "../../constant/Images";
import { normalizeFont, scaleHeight, scaleWidth } from "../../constant/Dimensions";
import { fontFamilies } from "../../constant/fontsFamilies";
import { useNavigation } from "@react-navigation/native";

const SubHeadeer = ({ name, onEditIconClick, image }) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={style.mainSection}>
            <TouchableOpacity 
                onPress={() => goBack()}
                style={style.touchable}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}  // Increase the touchable area
            >
                <Image source={Imaages.leftIcons} style={style.icon} />
            </TouchableOpacity>
            <Text style={style.names}>{name}</Text>
            <TouchableOpacity 
                onPress={onEditIconClick}
                style={style.touchable}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}  // Increase the touchable area
            >
                <Image source={image} style={style.icon} />
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    mainSection: {
        flexDirection: 'row',
        paddingTop: scaleHeight(50),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(20),
    },
    names: {
        fontSize: normalizeFont(18),
        fontFamily: fontFamilies.Mulish.semiBold,
        color: '#000000',
    },
    touchable: {
        padding: scaleHeight(10), 
    },
    icon: {
        width: scaleWidth(20),  // Customize size based on your design
        height: scaleHeight(20),
    },
});

export default SubHeadeer;