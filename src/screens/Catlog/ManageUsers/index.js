import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import SubHeadeer from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
import { normalizeFont, scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import { fontFamilies } from '../../../constant/fontsFamilies';
import { useNavigation, useRoute } from '@react-navigation/native';

const ManageUsers = () => {
  const route = useRoute();
  console.log("data", route)
  const { data } = route.params || {}; // Destructure token from route params
  console.log("Received data:", data);
  const navigation = useNavigation()
  const onEditIconClick = () => {
    navigation.navigate('editUser', { data: data })
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SubHeadeer name="Manage User" image={Imaages.edit} onEditIconClick={onEditIconClick} />
        <View style={styles.section}>
          <TouchableOpacity style={styles.actionRow}>
            <Text style={styles.actionText}>View Details</Text>
            <Image source={Imaages.openEye} />
          </TouchableOpacity>
        </View>

        <View style={styles.detailSection}>
          <DetailRow title="Status" value={data?.enabled ? 'Active' : 'InActive'} valueStyle={styles.activeStatus} />
          <DetailRow title="User ID" value={data.role} />
          <DetailRow title="Parent" value={data.name} />

        </View>
        <View style={styles.passwordSection}>
          <DetailRow title="Password" value="*******" isShowImage={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DetailRow = ({ title, value, valueStyle, isShowImage }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{title}</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
      {isShowImage &&
        <Image source={Imaages.password} />
      }
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FF',
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    marginTop: scaleHeight(15)
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: normalizeFont(16),
    color: '#000000'
  },
  detailSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: scaleHeight(20)
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: normalizeFont(14),
    fontFamily: fontFamilies.Mulish.regular,
    color: '#000000'
  },
  value: {
    fontSize: 16,
    color: '#000000'
  },
  activeStatus: {
    color: 'green',
  },
  passwordSection: {
    backgroundColor: 'white',
    marginTop: scaleHeight(20),
    padding: scaleWidth(20)
  }
});

export default ManageUsers;
