import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/Auth/Splash";
import Login from "../screens/Auth/Login";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import BottomNavigation from "./BottomNavigation";
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Forgotpassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="DashBoard" component={BottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation;