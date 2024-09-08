import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import CustomTextInput from "../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";
const ForgotPassword = () => {
    const navigation = useNavigation()
    const onButtonClick = () => {
        navigation.navigate('DashBoard')
    }
    return (
        <SafeAreaView style={styes.mainSection}>
            <Image style={styes.imageSection} source={Imaages.logo} />
            <View style={styes.typingSection}>
                <Text style={styes.loginText}>Bem-vindo de volta!</Text>
                <View>
                    <Text style={styes.levelText}>Usuário</Text>
                    <CustomTextInput />
                </View>
                <View style={styes.buttonSection}>
                    <CustomButton buttonName="Login" onButtonClick={() => onButtonClick()} />
                </View>
            </View>

        </SafeAreaView>
    )
}
export default ForgotPassword
const styes = StyleSheet.create({
    mainSection: {
        flex: 1
    },
    imageSection: {
        alignSelf: 'center',
        marginTop: 230
    },
    typingSection: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        marginTop: 10
    },
    loginText: {
        marginTop: 40,
        marginLeft: 30
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: '#667080',
        fontSize: 11,
        fontWeight: '400',
        marginBottom: 30,
        marginRight: 20
    },
    levelText: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 30,
        marginTop: 20
    },
    buttonSection:{
        marginTop:100
    }
})