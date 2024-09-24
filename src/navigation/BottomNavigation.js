import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/home/HomeDesign';
import Catalog from '../screens/Catlog';
import Notification from '../screens/notification/Notification';
import Users from '../screens/users/Users';
import Imaages from '../constant/Images';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const [roles, setRoles] = useState();
    useEffect(() => {
        getRole()
    }, [])
    const getRole = async () => {
        let role = await AsyncStorage.getItem('role');
        setRoles(role)
    }
    // const route = useRoute();  // Get the navigation route
    // console.log("all routes>>",route?.params?.params?.role)
    // const role=route?.params?.params?.role;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconSource;

                    // Use the same icon for both active and inactive states
                    switch (route.name) {
                        case 'Homes':
                            iconSource = Imaages.Home;
                            break;
                        case 'Dashboard':
                            iconSource = Imaages.Catalog;
                            break;
                        case 'Notification':
                            iconSource = Imaages.Notifications;
                            break;
                        case 'Users':
                            iconSource = Imaages.Profile;
                            break;
                        default:
                            iconSource = null;
                    }

                    const tintColor = focused ? '#2A3E97' : 'gray';

                    return (
                        <Image
                            source={iconSource}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: tintColor, // Apply dynamic tint color
                            }}
                        />
                    );
                },
                tabBarActiveTintColor: 'black', // Active tab color
                tabBarInactiveTintColor: 'gray', // Inactive tab color
                tabBarShowLabel: true, // Show labels
            })}
        >
            <Tab.Screen name="Homes" component={Home} options={{ headerShown: false }} />

            {roles == 'ADMIN' && (
                <Tab.Screen name="Dashboard" component={Catalog} options={{ headerShown: false }} />
            )}

            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Users" component={Users} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;