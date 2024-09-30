import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import Imaages from "../../../../constant/Images";
import { useNavigation } from "@react-navigation/native";
import SubHeadeer from "../../../../component/subHeader";
import { normalizeFont, scaleHeight } from "../../../../constant/Dimensions";
import { normalize } from "@rneui/themed";
import { fontFamilies } from "../../../../constant/fontsFamilies";
const ViewSingleCamera = () => {
    const navigation = useNavigation()
    const onEditIconClick = () => {
        navigation.navigate('EditSingleCamera')
    }
    return (
        <SafeAreaView style={styles.mainSction}>
            <SubHeadeer name="Detalhe da Câmera" image={Imaages.edit} onEditIconClick={onEditIconClick} />
            <View style={styles.detailsSection}>
                <Text style={styles.detals}>Details</Text>
            </View>
            <View style={styles.cameraDetails}>
                <View style={styles.flexStyle}>
                    <Text style={styles.maintext}>Nome da Câmera</Text>
                    <Text style={styles.innerText}>101</Text>
                </View>
                <View style={styles.flexStyle}>
                    <Text style={styles.maintext}>Status</Text>
                    <Text style={styles.innerText} >Active</Text>
                </View>
            </View>
            <View style={styles.cameraDetails}>
                <View style={styles.flexStyle} >
                    <View >
                        <Text style={styles.maintext}>RTMP Link</Text>
                        <Text style={styles.innerText}>rtmp://stream.example.com/live/streamkey</Text>
                    </View>
                    <Image source={Imaages.links} />
                </View>
                <View style={styles.flexStyle}>
                    <View>
                        <Text style={styles.maintext}>RTMP Key</Text>
                        <Text style={styles.innerText}>1234567890</Text>
                    </View>
                    <Image source={Imaages.links} />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ViewSingleCamera;
const styles = StyleSheet.create({
    mainSction: {
        backgroundColor: '#F8F9FF',
        flex: 1
    },
    detailsSection: {
        padding: scaleHeight(15),
        backgroundColor: 'white',
        marginHorizontal: scaleHeight(20),
        marginBottom: scaleHeight(10),
        marginTop:scaleHeight(20)
    },
    detals: {
        color: '#000000',
        fontSize: normalizeFont(14),
        fontFamily: fontFamilies.Mulish.semiBold
    },
    cameraDetails: {
        backgroundColor: 'white',
        marginHorizontal: scaleHeight(20),
        marginVertical: scaleHeight(10),
        borderRadius: scaleHeight(10),
        padding: scaleHeight(10)
    },
    flexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:scaleHeight(10)
    },
    innerText: {
        fontSize: normalizeFont(10),
        color: '#828282',
        fontFamily: fontFamilies.Mulish.regular
    },
    maintext: {
        color: '#000000'
    }
})