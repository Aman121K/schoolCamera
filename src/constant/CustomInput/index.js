// CustomTextInput.js
import React from 'react';
import { TextInput, StyleSheet, Image, View, TouchableOpacity, Platform } from 'react-native';
import Imaages from '../Images';

const CustomTextInput = ({ placeholder, value, onChangeText, style, showImage, secureTextEntry }) => {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {showImage &&
        <TouchableOpacity>
          <Image style={{ alignSelf: 'flex-end', top: 20 }} source={Imaages.password} />
        </TouchableOpacity>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    padding: Platform.OS == 'ios' ? 15 : 7,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    color: '#333',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%'
  }
});

export default CustomTextInput;
