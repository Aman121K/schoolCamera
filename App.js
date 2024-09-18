import React from "react";
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from "./src/navigation/StackNavigations";
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <NavigationContainer>

      <StackNavigation />
      <Toast
        position='top'
        bottomOffset={20}
      />
    </NavigationContainer>
  )
}
export default App