import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import SubHeadeer from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
import { BottomSheet, normalize } from '@rneui/themed';
import { normalizeFont, scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import { TouchableOpacity } from 'react-native';
import { fontFamilies } from '../../../constant/fontsFamilies';
const EditUsers = () => {
  const [isDeleteButtonClick, setIsDeleteButtonClick] = React.useState(false)
  const bottomSheetRef = useRef(null);
  const onEditIconClick = () => {
    setIsDeleteButtonClick(true)
  }
  const accountdelet=()=>{
    setIsDeleteButtonClick(false)
  }
  return (
    <SafeAreaView>
      <SubHeadeer name="Edit User" image={Imaages.deleteIcons} onEditIconClick={onEditIconClick} />
      <View>
      <View style={styles.detailSection}>
          <DetailRow title="Status" value="Active" valueStyle={styles.activeStatus} />
          <DetailRow title="User ID" value="123623" />
          <DetailRow title="Parent" value="ABCDE" />

        </View>
        <View  style={styles.detailSection}>
        <DetailRow title="password" value="*****" />
        </View>
      </View>
      <BottomSheet
        backdropStyle={styles.bottomSheetBackground}
        modalProps={{}} onBackdropPress={() => setIsDeleteButtonClick(false)} isVisible={isDeleteButtonClick}
      >
        <>
          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: scaleHeight(20) }}>
            <TouchableOpacity onPress={() => setIsDeleteButtonClick(false)}>
              <Image style={{ alignSelf: 'flex-end', marginRight: scaleWidth(30), margin: 10 }} source={Imaages.crossIcons} />
            </TouchableOpacity>
            <Text style={styles.lebel}>Are You Sure You Want to Delete This User?</Text>
            <Text style={styles.sublevel}>Deleting this User will permanently remove their data from the system. This action cannot be undone. Do you wish to proceed?</Text>
            <View>
              <TouchableOpacity onPress={()=>accountdelet()} style={styles.button}>
                <Text style={styles.actionText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>setIsDeleteButtonClick(false)} style={styles.button}>
                <Text style={styles.actionText}>No</Text>
              </TouchableOpacity>
            </View>

          </View>
        </>
      </BottomSheet>

    </SafeAreaView>
  )
  
}
const DetailRow = ({ title, value, valueStyle, isShowImage }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{title}</Text>
      <Text style={[styles.value, valueStyle]}>{value}</Text>
        <Image source={Imaages.edit} />
  </View>
);

export default EditUsers;
const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  lebel: {
    marginHorizontal: scaleWidth(30),
    fontSize: normalize(15),
    fontFamily: fontFamilies.Mulish.bold,
    color: '#18181B'

  },
  sublevel: {
    fontSize: normalize(12),
    fontFamily: fontFamilies.Mulish.semiBold,
    color: '#52525B',
    marginHorizontal: scaleWidth(30),
    marginVertical:scaleHeight(5)
  },
  button: {
    borderWidth: .5,
    padding: scaleHeight(10),
    marginHorizontal: scaleWidth(30),
    borderRadius: scaleWidth(15),
    marginTop: scaleHeight(10)
  },
  actionText:{
    color:'#18181B',
    fontSize:normalize(14),
    fontFamily:fontFamilies.Mulish.bold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },  label: {
    fontSize: normalizeFont(14),
    fontFamily: fontFamilies.Mulish.regular,
    color: '#000000'
  },
  value: {
    fontSize: 16,
  },
  activeStatus: {
    color: 'green',
  },
  passwordSection: {
    backgroundColor: 'white',
    marginTop: scaleHeight(20),
    padding: scaleWidth(20)
  },
  detailSection:{
    backgroundColor:'white',
    padding:scaleHeight(10),
    marginTop:scaleHeight(30)
  }
})