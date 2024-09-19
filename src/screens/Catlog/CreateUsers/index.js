import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SubHeadeer from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
import CustomTextInput from '../../../constant/CustomInput';
import CustomButton from '../../../constant/CustomButton';
import { scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import { normalize } from '@rneui/themed';
import { fontFamilies } from '../../../constant/fontsFamilies';

const CreateUsers = () => {
  const onCreateButtonClick = () => {

  }
  return (
    <ScrollView style={styles.container}>
      <SubHeadeer name="Add User" image={Imaages.threeDots} />
      <View style={{ marginTop: scaleHeight(10) }}>
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>LogIn ID</Text>
          <CustomTextInput placeholder="1232" />
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Role</Text>
          <CustomTextInput placeholder="Admin" />
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Name</Text>
          <CustomTextInput placeholder="Albert Flores" />
        </View>
        {/* Create Password */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Create Password</Text>
          <CustomTextInput placeholder="Confirm Password " />
        </View>
        {/* Confirm Password */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Confirm Password </Text>
          <CustomTextInput placeholder="Confirm Password " />
        </View>
        <View>
          <CustomButton buttonName="create" onButtonClick={onCreateButtonClick} />
        </View>
      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  inputSection: {
    marginHorizontal: scaleWidth(10)
  },
  levelText: {
    fontSize: normalize(13),
    fontFamily: fontFamilies.Mulish.semiBold,
    color: '#667080'
  }

});

export default CreateUsers;
