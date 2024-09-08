import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Imaages from "../Images";
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
        backgroundColor: '#262525',
        padding: '5%',
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
    imageStyle: {
        alignSelf: 'center',
        left: 80
    }
})