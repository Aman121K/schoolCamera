import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import CustomTextInput from "../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../constant/Dimensions";
import { fontFamilies } from "../../../constant/fontsFamilies";
import Toast from 'react-native-toast-message'
import API_URL from "../../../constant/Apis/urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(false)

    const onButtonClick = async () => {
        // Form validation
        if (!email || !password) {
            Toast.show({
                type: 'error',
                text1: 'Both fields are required',
                position: 'top',
                visibilityTime: 3000
            });
            return;
        }
    
        try {
            setLoading(true)
            const response = await fetch(API_URL.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Set content type as JSON
                },
                body: JSON.stringify({
                    login: email,    // Correcting the login field name
                    password: password
                })
            });
    
            const data = await response.json();  // Parse the response data
            console.log("API response is >>", data);
            setLoading(false)
            // Handle success response
            if (response.ok) {  // Check if response is OK (status 200-299)
                Toast.show({
                    type: 'success',
                    text1: 'Login successful!',
                    position: 'top',
                    visibilityTime: 3000
                });
               await AsyncStorage.setItem('token',data?.token)
                navigation.navigate('DashBoard', {
                    screen: 'Homes',  // Specify the initial screen in the tab
                    params: { token: data?.token },  // Pass the token to the screen
                });
            } else {
                // Handle login error with appropriate error message
                Toast.show({
                    type: 'error',
                    text1: 'Login failed',
                    text2: data.message || 'Please check your credentials',
                    position: 'top',
                    visibilityTime: 3000
                });
            }
        } catch (error) {
            // Handle network or other errors
            Toast.show({
                type: 'error',
                text1: 'An error occurred',
                text2: 'Please try again later',
                position: 'top',
                visibilityTime: 3000
            });
            console.error('Error:', error);
        }
    };


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
                            <Text style={styles.loginText}>Bem-vindo de volta!</Text>
                            <View>
                                <Text style={styles.levelText}>Usuário</Text>
                                <CustomTextInput
                                    placeholder="Informe Seu ID de usuário"
                                    value={email}
                                    onChangeText={setEmail} // Update email state
                                />
                            </View>
                            <View>
                                <Text style={styles.levelText}>Senha</Text>
                                <CustomTextInput
                                    placeholder="******"
                                    showImage={true}
                                    value={password}
                                    onChangeText={setPassword} // Update password state
                                    secureTextEntry={true} // Hide password input
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <CustomButton loading={loading} buttonName="Login" onButtonClick={onButtonClick} />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundImage: {},
    scrollContainer: {},
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
        marginBottom: 20,
        color: '#262525',
        marginLeft: scaleWidth(10)
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