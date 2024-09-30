import React from "react";
import { SafeAreaView, Switch, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SubHeadeer from "../../../../component/subHeader";
import Imaages from "../../../../constant/Images";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../../constant/CustomButton";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../../constant/Dimensions";
const EditSingleCamera = () => {
    const naigation = useNavigation()
    const onEditIconClick = () => {
        naigation.navigate()
    }
    const onButtonClick = () => {

    }
    return (
        <SafeAreaView>
            <SubHeadeer name="Editar Câmera" image={Imaages.deleteIcons} onEditIconClick={onEditIconClick} />
            <View style={style.nameSection}>
                <View style={style.flexStyle}>
                    <Text>Text</Text>
                    <Text>Ativo</Text>
                    <Switch />
                </View>
                <View style={style.flexStyle}>
                    <Text>Nome da Câmera</Text>
                    <Text>classroom 101</Text>
                    <TouchableOpacity>
                        <Image source={Imaages.edit} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.nameSection}>
                <View style={style.flexStyle}>
                    <Text>RTMP Limk</Text>
                    <Text style={style.innerText}>rtmp://stream.example.com/live/streamkey</Text>
                    <TouchableOpacity>
                        <Image source={Imaages.edit} />
                    </TouchableOpacity>
                </View>
                <View style={style.flexStyle}>
                    <Text>RTMP Key</Text>
                    <Text style={style.innerText}>9801234567</Text>
                    <TouchableOpacity>
                        <Image source={Imaages.edit} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: scaleHeight(30) }}>
                <CustomButton buttonName="Salvar" onButtonClick={onButtonClick} />
            </View>
        </SafeAreaView>
    )
}
export default EditSingleCamera;

const style = StyleSheet.create({
    nameSection: {
        backgroundColor: 'white',
        marginHorizontal: scaleWidth(15),
        padding: scaleWidth(10),
        borderRadius: scaleWidth(10),
        marginVertical: scaleWidth(10)
    },
    mainSection: {
        backgroundColor: '#F8F9FF',
        flex: 1
    },
    flexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerText: {
        fontSize: normalizeFont(8),
    }
})