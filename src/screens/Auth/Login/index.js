import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, ImageBackground } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import CustomTextInput from "../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../constant/Dimensions";
import { fontFamilies } from "../../../constant/fontsFamilies";

const Login = () => {
    const navigation = useNavigation();

    const onButtonClick = () => {
        navigation.navigate('DashBoard');
    }

    const forgotPassword = () => {
        navigation.navigate('Forgotpassword');
    }

    return (
        <SafeAreaView style={styles.mainSection}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Image source={Imaages.loginBg} style={{ height: '100%', width: '100%' }} />
                    <View style={styles.innerContainer}>
                        <View style={styles.typingSection}>
                            <Text style={styles.loginText}>Deixe Esqueci sua senha!</Text>
                            <View>
                                <Text style={styles.levelText}>Usuário</Text>
                                <CustomTextInput placeholder="Informe Seu ID de usuário" />
                            </View>
                            <View>
                                <Text style={styles.levelText}>Senha</Text>
                                <CustomTextInput placeholder="******" showImage={true} />
                            </View>
                        </View>
                        <View style={{marginTop:20}}>
                        <CustomButton buttonName="Login" onButtonClick={onButtonClick} />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {
      
    },
    scrollContainer: {

    },
    innerContainer: {
        flex: 1,
        top: scaleHeight(-40),
    },
    imageSection: {
        alignSelf: 'center',
        marginTop: 100,
    },
    typingSection: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: scaleWidth(10),
    },
    loginText: {
        marginTop: 20,
        fontSize: normalizeFont(20),
        fontFamily: fontFamilies.Mulish.regular,
        // fontWeight: 'bold',
        marginBottom: 20,
        color: '#262525'
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: '#667080',
        fontSize: normalizeFont(11),
        marginTop: 10,
        fontFamily: fontFamilies.Mulish.regular,
        marginBottom: scaleHeight(10),
        textDecorationLine: 'underline'
    },
    levelText: {
        fontSize: 13,
        fontFamily: fontFamilies.Mulish.semiBold,
        marginBottom: 5,
        marginLeft: 20,
        color: '#667080'
    },
});