import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/home/HomeDesign';
import Catalog from '../screens/Catlog';
import Notification from '../screens/notification/Notification';
import Users from '../screens/users/Users';
import Imaages from '../constant/Images';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
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
                        case 'Catalog':
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

                    const tintColor = focused ? 'black' : 'gray';

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
            <Tab.Screen name="Catalog" component={Catalog} options={{ headerShown: false }} />
            <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Users" component={Users} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;