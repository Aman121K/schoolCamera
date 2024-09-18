import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Imaages from "../Images";
import { normalizeFont } from "../Dimensions";
import { fontFamilies } from "../fontsFamilies";
const CustomButton = ({ buttonName, onButtonClick, isImage }) => {
    return (
        <TouchableOpacity onPress={onButtonClick} style={styes.mainSection}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styes.buttonText}>{buttonName}</Text>
                {isImage && <Image style={styes.imageStyle} source={Imaages.leftIcon} />}
            </View>

        </TouchableOpacity>
    )
}
export default CustomButton;
const styes = StyleSheet.create({
    mainSection: {
        backgroundColor: '#2A3E97',
        padding: '5%',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: normalizeFont(16),
        fontFamily:fontFamilies.Mulish.semiBold
    },
    imageStyle: {
        alignSelf: 'center',
        left: 80
    }
})