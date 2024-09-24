import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import SubHeadeer from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
import CustomTextInput from '../../../constant/CustomInput';
import CustomButton from '../../../constant/CustomButton';
import { scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import { normalize } from '@rneui/themed';
import { fontFamilies } from '../../../constant/fontsFamilies';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateUsers = () => {
  const [formData, setFormData] = useState({
    login: '',
    role: '',
    name: '',
    password: '',
    confirmPassword: ''
  });
  const [buttonLoading, setButtonLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [showRoleDropdown, setShowRoleDropdown] = useState(false); // Dropdown visibility state
  const roles = ['Admin', 'Parent']; // Roles array

  // Handle input changes
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Validate inputs
  const validateInputs = () => {
    let tempErrors = {};
    if (!formData.login) tempErrors.login = "Login ID is required";
    if (!formData.role) tempErrors.role = "Role is required";
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle API call on button click
  const onCreateButtonClick = async () => {
    if (validateInputs()) {
      setButtonLoading(true)
      let token = await AsyncStorage.getItem('token')
      const body = {
        name: formData.name,
        login: formData.login,
        role: formData.role.toUpperCase(),
        password: formData.password,

      }
      console.log("body>>", body)
      try {
        const response = await axios.post('https://goes-camera-monitoring-service-webapp-byfhf7enekh7cnbn.eastus-01.azurewebsites.net/users',
          body, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        Toast.show({
          type: 'success',
          text1: 'Register successful!',
          position: 'top',
          visibilityTime: 3000
        });
        setButtonLoading(false)
        setFormData({ login: '', role: '', name: '', password: '', confirmPassword: '' }); // Reset form
      } catch (error) {
        console.log("Error Details:", error.response ? error.response.data : error.message);
        setButtonLoading(false)
        Toast.show({
          type: 'error',
          text1: 'Register Failed!',
          position: 'top',
          visibilityTime: 3000
        });
      }
    }
  };

  // Handle role selection
  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setShowRoleDropdown(false);
  };

  return (
    <ScrollView style={styles.container}>
      <SubHeadeer name="Add User" image={Imaages.threeDots} />
      <View style={{ marginTop: scaleHeight(10) }}>
        {/* LogIn ID */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>LogIn ID</Text>
          <CustomTextInput
            placeholder="Enter Login ID"
            value={formData.login}
            onChangeText={(value) => handleInputChange('login', value)}
          />
          {errors.login && <Text style={styles.errorText}>{errors.login}</Text>}
        </View>

        {/* Role Selection */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Role</Text>
          <TouchableOpacity onPress={() => setShowRoleDropdown(!showRoleDropdown)}>
            <CustomTextInput
              placeholder="Select Role"
              value={formData.role}
              editable={false}
            />
          </TouchableOpacity>
          {showRoleDropdown && (
            <FlatList
              data={roles}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleRoleSelect(item)}>
                  <Text style={styles.dropdownItem}>{item}</Text>
                </TouchableOpacity>
              )}
              style={styles.dropdownList}
            />
          )}
          {errors.role && <Text style={styles.errorText}>{errors.role}</Text>}
        </View>

        {/* Name */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Name</Text>
          <CustomTextInput
            placeholder="Enter Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        {/* Create Password */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Create Password</Text>
          <CustomTextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
          />
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

        {/* Confirm Password */}
        <View style={styles.inputSection}>
          <Text style={styles.levelText}>Confirm Password</Text>
          <CustomTextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
          />
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
        </View>

        {/* Create Button */}
        <View>
          <CustomButton loading={buttonLoading} buttonName="Create" onButtonClick={onCreateButtonClick} />
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
    marginHorizontal: scaleWidth(10),
    marginVertical: scaleHeight(5),
  },
  levelText: {
    fontSize: normalize(13),
    fontFamily: fontFamilies.Mulish.semiBold,
    color: '#667080',
  },
  errorText: {
    color: 'red',
    fontSize: normalize(12),
    marginTop: scaleHeight(2),
  },
  dropdownList: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: scaleHeight(5),
  },
  dropdownItem: {
    padding: scaleHeight(10),
    fontSize: normalize(14),
    fontFamily: fontFamilies.Mulish.regular,
  },
});

export default CreateUsers;