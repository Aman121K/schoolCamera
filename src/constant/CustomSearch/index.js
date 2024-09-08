import React from "react";
import { Image, Platform, StyleSheet, TextInput, View } from 'react-native';
import Imaages from "../Images";
const Search = ({ searchText, onChange }) => {
    return (
        <View style={styles.mainSection}>
            <Image style={{alignSelf:'center',left:5}} source={Imaages.Search} />
            <TextInput style={styles.inputText} placeholder="Pesquisar" onChangeText={onChange} />
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
    
    }
})