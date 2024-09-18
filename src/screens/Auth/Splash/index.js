import React from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView, ImageBackground, StatusBar } from 'react-native';
import Imaages from "../../../constant/Images";
import CustomButton from "../../../constant/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { fontFamilies } from "../../../constant/fontsFamilies";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../constant/Dimensions";

const Splash = () => {
    const navigation = useNavigation();

    const onButtonClick = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground source={Imaages.onBoarding} style={styles.backgroundImage} resizeMode="cover">
                <SafeAreaView style={styles.mainSection}>
                    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.textSection}>
                            <Text style={styles.headText}>Sistema XYZ de Monitoramento de Escolas</Text>
                            <Text style={styles.subText}>
                                Experimente a mais alta qualidade de vegetais e frutas frescas da fazenda, selecionadas especialmente para você
                            </Text>
                        </View>
                        <CustomButton buttonName='Vamos começar' onButtonClick={onButtonClick} isImage={true} />
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    mainSection: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    textSection: {},
    headText: {
        marginTop: scaleHeight(550),
        color: '#FFFFFF',
        fontSize: normalizeFont(24),
        marginHorizontal: scaleWidth(30),
        fontFamily: fontFamilies.Mulish.bold
    },
    subText: {
        fontSize: normalizeFont(14),
        fontFamily: fontFamilies.Mulish.regular,
        color: '#FFFFFF',
        marginHorizontal: scaleWidth(30),
        marginVertical: 10,
    },
});