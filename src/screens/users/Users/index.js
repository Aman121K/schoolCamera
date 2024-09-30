import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

const Users = () => {
    const [loading, setLoading] = useState(false); // State to handle loading
    const navigation = useNavigation();

    const onLogout = async () => {
        setLoading(true);  // Start loader
        try {
            await AsyncStorage.clear(); // Clear all AsyncStorage items
            navigation.navigate('Login'); // Navigate after clearing storage
        } catch (error) {
            console.error("Error clearing AsyncStorage: ", error);
        } finally {
            setLoading(false);  // Stop loader
        }
    }

    return (
        <SafeAreaView style={styles.mainSection}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>User Page</Text>
                <Text style={styles.subText}>Coming Soon</Text>

                {loading ? (
                    <ActivityIndicator size="large" color="#2A3E97" /> // Show loader while clearing
                ) : (
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={onLogout}
                    >
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Users;

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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
        backgroundColor: '#2A3E97',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});