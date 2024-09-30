import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, Switch, TouchableOpacity } from 'react-native';
import SubHeader from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
import { normalizeFont, scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import CustomButton from '../../../constant/CustomButton';
import Toast from 'react-native-toast-message';
import { BottomSheet, normalize } from '@rneui/themed';
import { fontFamilies } from '../../../constant/fontsFamilies';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure you're importing AsyncStorage

const EditUsers = () => {
  const route = useRoute();
  const { data } = route.params || {}; // Destructure token from route params
  console.log("finla role>>", data)
  const [userData, setUserData] = useState({
    status: data?.enabled ? "Active" : "Inactive",
    userId: data?.id || "",
    parentName: data?.name || "",
    password: "*****", // Placeholder, as password wasn't part of the data,
    role: data?.role
  });

  const [isDeleteButtonClick, setIsDeleteButtonClick] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  const toggleStatus = () => {
    setUserData((prevData) => ({
      ...prevData,
      status: prevData.status === "Active" ? "Inactive" : "Active",
    }));
  };

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const toggleEditField = (field) => {
    setEditingField(field);
  };

  const onUpdateClick = async () => {
    setUpdateLoading(true);
    try {
      let token = await AsyncStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const updatedData = {
        name: userData.parentName, // Use edited name
        login: userData.userId, // Assuming userId corresponds to login
        role: userData.role, // Assuming role is hardcoded or managed elsewhere
        enabled: userData.status == "Active" ? true : false, // Convert status to boolean
      };

      console.log("body>>", updatedData, `Bearer ${token}`)

      const response = await fetch(
        `https://goes-camera-monitoring-service-webapp-byfhf7enekh7cnbn.eastus-01.azurewebsites.net/users/${userData.userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Make sure token is added here
          },
          body: JSON.stringify(updatedData), // Convert the body to JSON
        }
      );
      console.log("Response>>", response)

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      Toast.show({
        type: 'success',
        text1: 'User updated successfully!',
        position: 'top',
        visibilityTime: 3000,
      });

      setEditingField(null);
    } catch (error) {
      console.error('Update error:', error);
      Toast.show({
        type: 'error',
        text1: 'Failed to update user!',
        position: 'top',
        visibilityTime: 3000,
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  const onEditIconClick = () => {
    setIsDeleteButtonClick(true);
  };

  const accountDelete = () => {
    setIsDeleteButtonClick(false);
    Toast.show({
      type: 'success',
      text1: 'Your Account deletion request is submitted',
      position: 'top',
      visibilityTime: 3000,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <SubHeader name="Edit User" image={Imaages.deleteIcons} onEditIconClick={onEditIconClick} />

      <View style={styles.detailSection}>
        <DetailRow
          title="Status"
          value={userData.status}
          isEditing={editingField === 'status'}
          isSwitch={true} // Pass a prop to enable the switch toggle
          switchValue={userData.status === "Active"}
          onSwitchToggle={toggleStatus}
        />

        <DetailRow
          title="User ID"
          value={userData.userId}
          isEditing={false} // User ID is not editable
        />

        <DetailRow
          title="Parent Name"
          value={userData.parentName}
          isEditing={editingField === 'parentName'}
          onEditClick={() => toggleEditField('parentName')}
          onChangeText={(text) => handleInputChange('parentName', text)}
        />

        <DetailRow
          title="Password"
          value={userData.password}
          isEditing={editingField === 'password'}
          onEditClick={() => toggleEditField('password')}
          onChangeText={(text) => handleInputChange('password', text)}
        />
      </View>

      <View style={{ marginTop: scaleHeight(50) }}>
        <CustomButton loading={updateLoading} buttonName="Update" onButtonClick={onUpdateClick} />
      </View>

      <BottomSheet
        backdropStyle={styles.bottomSheetBackground}
        modalProps={{}}
        onBackdropPress={() => setIsDeleteButtonClick(false)}
        isVisible={isDeleteButtonClick}
      >
        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: scaleHeight(20) }}>
          <TouchableOpacity onPress={() => setIsDeleteButtonClick(false)}>
            <Image style={{ alignSelf: 'flex-end', marginRight: scaleWidth(30), margin: 10 }} source={Imaages.crossIcons} />
          </TouchableOpacity>
          <Text style={styles.label}>Are You Sure You Want to Delete This User?</Text>
          <Text style={styles.subLabel}>Deleting this User will permanently remove their data from the system. This action cannot be undone. Do you wish to proceed?</Text>
          <View>
            <TouchableOpacity onPress={accountDelete} style={styles.button}>
              <Text style={styles.actionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsDeleteButtonClick(false)} style={styles.button}>
              <Text style={styles.actionText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const DetailRow = ({ title, value, isEditing, isSwitch, onSwitchToggle, switchValue, onEditClick, onChangeText }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{title}</Text>

    <View style={styles.inputContainer}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>

    {isSwitch ? (
      <Switch
        value={switchValue}
        onValueChange={onSwitchToggle}
      />
    ) : (
      <TouchableOpacity onPress={onEditClick}>
        <Image source={Imaages.edit} style={styles.editIcon} />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  label: {
    marginHorizontal: scaleWidth(30),
    fontSize: normalize(15),
    fontFamily: fontFamilies.Mulish.bold,
    color: '#18181B',
  },
  subLabel: {
    fontSize: normalize(12),
    fontFamily: fontFamilies.Mulish.semiBold,
    color: '#52525B',
    marginHorizontal: scaleWidth(30),
    marginVertical: scaleHeight(5),
  },
  button: {
    borderWidth: 0.5,
    padding: scaleHeight(10),
    marginHorizontal: scaleWidth(30),
    borderRadius: scaleWidth(15),
    marginTop: scaleHeight(10),
  },
  actionText: {
    color: '#18181B',
    fontSize: normalize(14),
    fontFamily: fontFamilies.Mulish.bold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Centers elements vertically within the row
    margin: 10,
  },
  label: {
    flex: 1, // Takes 1/3 of available space
    fontSize: normalize(15),
    fontFamily: fontFamilies.Mulish.bold,
    color: '#18181B',
  },
  inputContainer: {
    flex: 2, // Takes 2/3 of available space
    justifyContent: 'center',
    marginHorizontal: scaleWidth(10), // Adds horizontal space
  },
  input: {
    fontSize: 16,
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'left', // Ensures text aligns left
  },
  value: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
  },
  switch: {
    flex: 0.5, // Smaller size for the switch
  },
  editIcon: {
    width: 20,
    height: 20,
  },
});

export default EditUsers;
