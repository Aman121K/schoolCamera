import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SubHeadeer from "../../../../component/subHeader";
import CustomButton from "../../../../constant/CustomButton";
import { fontFamilies } from "../../../../constant/fontsFamilies";
import { normalizeFont, scaleHeight } from "../../../../constant/Dimensions";
import CustomTextInput from "../../../../constant/CustomInput";
import { useNavigation } from "@react-navigation/native";
const AddSchool = () => {
    const navigation = useNavigation()
    const [schoolName, setSchoolName] = useState();
    const [responsive, setResponsibe] = useState();
    const [phone, setPhone] = useState();
    const onButtonClick = () => {
        navigation.navigate('UpdateSchoolLogo')
    }
    return (
        <SafeAreaView style={styles.mainSection}>
            <SubHeadeer name="Adicionar Câmera" />
            <View>
                <Text style={styles.levelText}>Nome da Câmera</Text>
                <CustomTextInput
                    placeholder="Horizon International School"
                    value={schoolName}
                    showImage={false}
                    onChangeText={setSchoolName} // Update password state
                />
            </View>
            <View>
                <Text style={styles.levelText}>Nome do responsável</Text>
                <CustomTextInput
                    placeholder="XYZ"
                    value={responsive}
                    showImage={false}
                    onChangeText={setResponsibe} // Update password state
                />
            </View>
            <View>
                <Text style={styles.levelText}>Número do Telefone ( Whatsapp )</Text>
                <CustomTextInput
                    placeholder="(316) 555-0116"
                    value={phone}
                    showImage={false}
                    onChangeText={setPhone} // Update password state
                />
            </View>
            <View style={{ marginTop: scaleHeight(40) }}>
                <CustomButton buttonName="Salvar" onButtonClick={onButtonClick} />
            </View>
        </SafeAreaView>
    )
}
export default AddSchool;
const styles = StyleSheet.create({
    mainSection: {
        backgroundColor: '#F8F9FF',
        flex: 1
    },
    levelText: {
        fontSize: normalizeFont(13),
        fontFamily: fontFamilies.Mulish.semiBold,
        marginBottom: 5,
        marginLeft: 20,
        color: '#667080'
    },
})