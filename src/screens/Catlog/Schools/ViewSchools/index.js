import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SubHeadeer from "../../../../component/subHeader";
import Imaages from "../../../../constant/Images";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { scaleHeight, scaleWidth } from "../../../../constant/Dimensions";
const ViewSchools = () => {
    const navigation = useNavigation()
    const onEditIconClick = () => {
        navigation.navigate("EditSchoolDetails")
    }
    return (
        <SafeAreaView>
            <SubHeadeer name="Adicionar logo da escola" image={Imaages.edit} onEditIconClick={onEditIconClick} />
            <View style={style.imageStyle}>
                <Image source={Imaages.userImages} />
            </View>
            <View style={style.detailsSections}>
                <Text>Detalhes</Text>
            </View>
            <View style={style.detailsSections}>
                <View style={style.flexStyle}>
                    <Text>Status</Text>
                    <Text>Inactive</Text>
                </View>
                <View style={style.flexStyle}>
                    <Text>Status</Text>
                    <Text>Inactive</Text>
                </View>
                <View style={style.flexStyle}>
                    <Text>Status</Text>
                    <Text>Inactive</Text>
                </View>
                <View style={style.flexStyle}>
                    <Text>Status</Text>
                    <Text>Inactive</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ViewSchools;
const style = StyleSheet.create({
    imageStyle: {
        alignSelf: 'center',
        marginVertical: scaleHeight(20)
    },
    flexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailsSections:{
        backgroundColor:'white',
        padding:scaleHeight(10),
        marginHorizontal:scaleWidth(15),
        borderRadius:scaleHeight(10),
        marginTop:scaleHeight(10)
    }
})