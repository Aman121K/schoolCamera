import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Users = () => {
    const navigation = useNavigation();
    const onLogout = async () => {
        await AsyncStorage.setItem('token', ''),
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={styles.mainSection}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>User Page</Text>
                <Text style={styles.subText}>Coming Soon</Text>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => onLogout()}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Users;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: '#f5f5f5', // Light background for a clean look
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    subText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 40,
    },
    logoutButton: {
        backgroundColor: '#2A3E97',  // Blue background color for the button
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,  // Rounded corners
        shadowColor: '#000',  // Shadow for depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,  // Elevation for Android
    },
    logoutText: {
        color: '#fff',  // White text for contrast
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});