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
import AllCamera from "../screens/home/ManageCamera/AllCamera";
import EditSingleCamera from "../screens/home/ManageCamera/EditSingleCamera";
import ViewSingleCamera from "../screens/home/ManageCamera/ViewSingleCamera";
import CreateCamera from "../screens/home/ManageCamera/CreateCamera";
import AddSchool from "../screens/Catlog/Schools/AddSchools";
import EditSchoolDetails from "../screens/Catlog/Schools/EditSchoolDetails";
import UpdateSchoolLogo from "../screens/Catlog/Schools/UpdateSchoolLogo";
import ViewSchools from "../screens/Catlog/Schools/ViewSchools";
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
            <Stack.Screen name="AllCamera" component={AllCamera} options={{ headerShown: false }} />
            <Stack.Screen name="EditSingleCamera" component={EditSingleCamera} options={{ headerShown: false }} />
            <Stack.Screen name="ViewSingleCamera" component={ViewSingleCamera} options={{ headerShown: false }} />
            <Stack.Screen name="CreateCamera" component={CreateCamera} options={{ headerShown: false }} />
            <Stack.Screen name="AddSchool" component={AddSchool} options={{ headerShown: false }} />
            <Stack.Screen name="EditSchoolDetails" component={EditSchoolDetails} options={{ headerShown: false }} />
            <Stack.Screen name="UpdateSchoolLogo" component={UpdateSchoolLogo} options={{ headerShown: false }} />
            <Stack.Screen name="ViewSchools" component={ViewSchools} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation;