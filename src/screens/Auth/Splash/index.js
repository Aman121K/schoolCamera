// import React from "react";
// import { Image, SafeAreaView, StyleSheet, View, Text } from 'react-native';
// import Imaages from "../../../constant/Images";
// import CustomButton from "../../../constant/CustomButton";
// import { useNavigation } from "@react-navigation/native";
// const Splash = () => {
//     const navigation = useNavigation()
//     const onButtonClick = () => {
//         navigation.navigate('Login')
//     }
//     return (
//         <SafeAreaView style={styes.mainSection}>
//             <Image style={styes.imageSection} source={Imaages.logo} />
//             <View style={styes.textSection}>
//                 <Text style={styes.headText}>Sistema XYZ de Monitoramento de Escolas</Text>
//                 <Text style={styes.subText}>Experimente a mais alta qualidade de vegetais e frutas frescas da fazenda, selecionadas especialmente para você</Text>
//             </View>
//             <CustomButton buttonName='Vamos começar' onButtonClick={() => onButtonClick()} isImage={true} />
//         </SafeAreaView>
//     )
// }
// export default Splash
// const styes = StyleSheet.create({
//     mainSection: {
//         flex: 1,
//         background: '#F8F8F8',

//     },
//     imageSection: {
//         alignSelf: 'center',
//         marginTop: 200,
//         marginBottom: 200

//     },
//     textSection: {
//     },
//     headText: {
//         color: '#262525',
//         fontSize: 24,
//         fontWeight: '800',
//         marginHorizontal: 30,
//         letterSpacing: .5
//     },
//     subText: {
//         fontSize: 14,
//         fontWeight: '400',
//         color: '#262525',
//         marginHorizontal: 30,
//         marginVertical: 10
//     }
// })


import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    const onButtonClick = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.mainSection}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Image style={styles.imageSection} source={Imaages.logo} />
                <View style={styles.textSection}>
                    <Text style={styles.headText}>Sistema XYZ de Monitoramento de Escolas</Text>
                    <Text style={styles.subText}>Experimente a mais alta qualidade de vegetais e frutas frescas da fazenda, selecionadas especialmente para você</Text>
                </View>
                <CustomButton buttonName='Vamos começar' onButtonClick={onButtonClick} isImage={true} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Splash;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center', // Ensures content is centered vertically
    },
    imageSection: {
        alignSelf: 'center',
        marginTop: 200,
        marginBottom: 200,
    },
    textSection: {},
    headText: {
        color: '#262525',
        fontSize: 24,
        fontWeight: '800',
        marginHorizontal: 30,
        letterSpacing: 0.5,
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#262525',
        marginHorizontal: 30,
        marginVertical: 10,
    },
});
