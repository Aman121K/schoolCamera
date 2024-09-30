import React from "react";
import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';
import Imaages from "../Images";
import { scaleWidth } from "../Dimensions";
import { TouchableOpacity } from "react-native";
const Search = ({ searchText, onChange }) => {
    return (
        <View style={styles.mainSection}>
            <TouchableOpacity style={{ alignSelf: 'center', left: 5 }}>
                <Image style={{ alignSelf: 'center', left: 5 }} source={Imaages.Search} />
            </TouchableOpacity>
            <TextInput style={styles.inputText} placeholder="Pesquisar" onChangeText={onChange} />
            <TouchableOpacity style={{ alignSelf: 'center', left: 5 }}>
                <Image  source={Imaages.filter} />
            </TouchableOpacity>
        </View>
    )
}
export default Search;
const styles = StyleSheet.create({
    mainSection: {
        flexDirection: 'row',
        backgroundColor: '#EEF1F4',
        marginHorizontal: 30,
        padding: Platform.OS == 'ios' ? 15 : 5,
        borderRadius: 10,
        marginTop: 20
    },
    inputText: {
        marginHorizontal: 20,
        width: scaleWidth(220)

    }
})