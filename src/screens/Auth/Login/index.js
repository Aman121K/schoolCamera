// import React from "react";
// import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
// import Imaages from "../../../constant/Images";
// import CustomButton from "../../../constant/CustomButton";
// import CustomTextInput from "../../../constant/CustomInput";
// import { useNavigation } from "@react-navigation/native";

// const Login = () => {
//     const navigation = useNavigation();

//     const onButtonClick = () => {
//         navigation.navigate('DashBoard');
//     }

//     const forgotPassword = () => {
//         navigation.navigate('Forgotpassword');
//     }

//     return (
//         <SafeAreaView style={styles.mainSection}>
//             <KeyboardAvoidingView
//                 behavior={Platform.OS === "ios" ? "padding" : "height"}
//                 style={{ flex: 1 }}
//             >
//                 <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//                     <View style={styles.innerContainer}>
//                         <Image style={styles.imageSection} source={Imaages.logo} />
//                         <View style={styles.typingSection}>
//                             <Text style={styles.loginText}>Deixe Esqueci sua senha!</Text>
//                             <View>
//                                 <Text style={styles.levelText}>Usuário</Text>
//                                 <CustomTextInput placeholder="Informe Seu ID de usuário" />
//                             </View>
//                             <View>
//                                 <Text style={styles.levelText}>Senha</Text>
//                                 <CustomTextInput placeholder="******" showImage={true} />
//                             </View>
//                             <TouchableOpacity onPress={forgotPassword}>
//                                 <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
//                             </TouchableOpacity>
//                             <CustomButton buttonName="Login" onButtonClick={onButtonClick} />
//                         </View>
//                     </View>
//                 </ScrollView>
//             </KeyboardAvoidingView>
//         </SafeAreaView>
//     );
// }

// export default Login;

// const styles = StyleSheet.create({
//     mainSection: {
//         flex: 1,
//         backgroundColor: '#f5f5f5',
//     },
//     innerContainer: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     imageSection: {
//         alignSelf: 'center',
//         marginTop: 100,  // Adjusted for keyboard friendliness
//     },
//     typingSection: {
//         backgroundColor: '#FFFFFF',
//         borderTopLeftRadius: 40,
//         borderTopRightRadius: 40,
//         paddingVertical: 20,
//         paddingHorizontal: 20,
//         marginTop: 30,
//     },
//     loginText: {
//         marginTop: 20,
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom:20
//     },
//     forgotPassword: {
//         alignSelf: "flex-end",
//         color: '#667080',
//         fontSize: 11,
//         fontWeight: '400',
//         marginTop: 10,
//     },
//     levelText: {
//         fontSize: 13,
//         fontWeight: '600',
//         marginBottom: 5,
//         marginLeft:20
//     },
// });
// // 

import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import CustomTextInput from "../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";

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
                    <View style={styles.innerContainer}>
                        <Image style={styles.imageSection} source={Imaages.logo} />
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
                            <TouchableOpacity onPress={forgotPassword}>
                                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageSection: {
        alignSelf: 'center',
        marginTop: 100,  // Adjust for keyboard
    },
    typingSection: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: 30,
    },
    loginText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        color: '#667080',
        fontSize: 11,
        fontWeight: '400',
        marginTop: 10,
    },
    levelText: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 5,
        marginLeft: 20,
    },
});
