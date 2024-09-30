import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import SubHeadeer from "../../../../component/subHeader";
import CustomTextInput from "../../../../constant/CustomInput";
import CustomButton from "../../../../constant/CustomButton";
import { fontFamilies } from "../../../../constant/fontsFamilies";
import { normalizeFont, scaleHeight, scaleWidth } from "../../../../constant/Dimensions";
const CreateCamera = () => {
    const [cameraName, setCameraName] = useState();
    const [rtmlUrl, setRtmpUrl] = useState();
    const [rtmpKey, setRtmpKey] = useState();
    const onButtonClick = () => {
    }
    return (
        <SafeAreaView style={styles.mainConatiner}>
            <SubHeadeer name="Adicionar Câmera" />
            <View style={styles.cameraSection}>
                <Text style={styles.cameraName}>Detalhes da Câmera</Text>
            </View>

            <View>
                <Text style={styles.levelText}>Nome da Câmera</Text>
                <CustomTextInput
                    placeholder="Classroom 101"
                    value={cameraName}
                    showImage={false}
                    onChangeText={setCameraName} // Update password state
                />
            </View>
            <View>
                <Text style={styles.levelText}>RTMP URL</Text>
                <CustomTextInput
                    placeholder="rtmp://stream.example.com/live/xhz"
                    value={rtmlUrl}
                    showImage={false}
                    onChangeText={setRtmpUrl} // Update password state
                />
            </View>
            <View>
                <Text style={styles.levelText}>RTMP Key</Text>
                <CustomTextInput
                    placeholder="School1-class101"
                    value={rtmpKey}
                    showImage={false}
                    onChangeText={setRtmpKey} // Update password state
                />
            </View>
            <View style={{ marginTop: scaleHeight(20) }}>
                <CustomButton buttonName="Salvar" onButtonClick={onButtonClick} />
            </View>

        </SafeAreaView>
    )
}
export default CreateCamera;
const styles = StyleSheet.create({
    levelText: {
        fontSize: normalizeFont(13),
        fontFamily: fontFamilies.Mulish.semiBold,
        marginBottom: 5,
        marginLeft: 20,
        color: '#667080'
    },
    mainConatiner: {
        backgroundColor: '#F8F9FF',
        flex: 1
    },
    cameraName: {
        color: '#000000',

    },
    cameraSection: {
        padding: scaleHeight(15),
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        fontSize: normalizeFont(14),
        fontFamily: fontFamilies.Mulish.semiBold,
        paddingLeft: scaleWidth(20),
        marginVertical: scaleHeight(10),
        borderRadius: scaleHeight(13)
    }
})