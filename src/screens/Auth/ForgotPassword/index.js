import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import CustomTextInput from "../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { scaleHeight } from "../../../constant/Dimensions";
import Toast from 'react-native-toast-message'
const ForgotPassword = () => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        Toast.show({
            type: 'info',
            text1: 'This is an info message'
        });
        // navigation.navigate('DashBoard');
    };

    return (
        <SafeAreaView style={styles.mainSection}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Image style={styles.imageSection} source={Imaages.loginBg} />
                <View style={styles.backButton}>
                    {/* <Image tintColor="red" source={Imaages.leftIcon} /> */}
                </View>
                <View style={styles.typingSection}>
                    <Text style={styles.loginText}>Bem-vindo de volta!</Text>
                    <View>
                        <Text style={styles.levelText}>Usuário</Text>
                        <CustomTextInput placeholder="Type Email" />
                    </View>
                    <View style={styles.buttonSection}>
                        <CustomButton buttonName="Login" onButtonClick={() => onButtonClick()} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center', 
    },
    imageSection: {
        height: '50%',
        width: '100%',
    },
    typingSection: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 10,
        top: scaleHeight(-40),
        paddingBottom: 40, // To ensure the content can scroll fully
    },
    loginText: {
        marginTop: 40,
        marginLeft: 30,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: '#667080',
        fontSize: 11,
        fontWeight: '400',
        marginBottom: 30,
        marginRight: 20,
    },
    levelText: {
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 30,
        marginTop: 20,
    },
    buttonSection: {
    },
    backButton: {
        position: 'absolute',
        margin: 0,
    }
});