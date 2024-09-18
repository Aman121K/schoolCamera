import React from 'react';
import { SafeAreaView, Text,View } from 'react-native';
import SubHeadeer from '../../../component/subHeader';
import Imaages from '../../../constant/Images';
const EditUsers = () => {
  const [isDeleteButtonClick, setIsDeleteButtonClick] = React.useState(false)
  const onEditIconClick = () => {
    setIsDeleteButtonClick(!isDeleteButtonClick)
  }
  return (
    <SafeAreaView>
      <SubHeadeer name="Edit User" image={Imaages.deleteIcons} onEditIconClick={onEditIconClick} />
      <View>
        
        
      </View>
    </SafeAreaView>
  )
}
export default EditUsers;