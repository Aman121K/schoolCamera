import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SubHeadeer from "../../../../component/subHeader";
import Imaages from "../../../../constant/Images";
import CustomButton from "../../../../constant/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { scaleHeight } from "../../../../constant/Dimensions";
const UpdateSchoolLogo = () => {
    const navigation = useNavigation()
    const [schoolImahe, setSchoolImage] = useState();
    const onEditIconClick = () => {

    }
    const onButtonClick = () => {
        navigation.navigate("ViewSchools")
    }

    return (
        <SafeAreaView>
            <SubHeadeer name="Adicionar logo da escola" image={Imaages.threeDots} onEditIconClick={onEditIconClick} />
            <View style={style.imagesSectiom}>
                <Image source={Imaages.userImages} />
            </View>
            <View>
                <TouchableOpacity style={{ alignSelf: 'center', marginVertical: scaleHeight(10) }} onPress={() => navigation.goBack()}>
                    <Text>Skip</Text>
                </TouchableOpacity>
                <CustomButton buttonName="Adicionar Logo" onButtonClick={onButtonClick} />
            </View>
        </SafeAreaView>
    )
}
export default UpdateSchoolLogo;
const style = StyleSheet.create({
    imagesSectiom: {
        alignSelf: 'center',
        marginVertical: scaleHeight(80)
    }
})