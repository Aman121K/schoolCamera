import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/Auth/Splash";
import Login from "../screens/Auth/Login";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import BottomNavigation from "./BottomNavigation";
import ManageUsers from "../screens/Catlog/ManageUsers";
import ManageSchools from "../screens/Catlog/ManageSchools";
import EditUsers from "../screens/Catlog/EditUser";
import EditSchools from "../screens/Catlog/EditSchool";
import CreateSchools from "../screens/Catlog/CreateUsers";
import CreateUsers from "../screens/Catlog/CreateUsers";
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Forgotpassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="DashBoard" component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="manageUser" component={ManageUsers} options={{ headerShown: false }} />
            <Stack.Screen name="manageSchool" component={ManageSchools} options={{ headerShown: false }} />
            <Stack.Screen name="editUser" component={EditUsers} options={{ headerShown: false }} />
            <Stack.Screen name="editSchool" component={EditSchools} options={{ headerShown: false }} />
            <Stack.Screen name="createUser" component={CreateUsers} options={{ headerShown: false }} />
            <Stack.Screen name="createSchool" component={CreateSchools} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation;