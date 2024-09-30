import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import HomeHeader from '../../component/HomeHeader';
import { normalizeFont, scaleHeight, scaleWidth } from '../../constant/Dimensions';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Imaages from '../../constant/Images';
import { fontFamilies } from '../../constant/fontsFamilies';
import axios from 'axios';
import { lightColors } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';

const Catlog = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Usuários');
    const [usersData, setUsersData] = useState([]);
    const [schoolData, setSchoolData] = useState([]);
    const [loginDatas, setLoginDatas] = useState();
    const [stats, setStats] = useState({});

    const fetchUsersData = async () => {
        let token = await AsyncStorage.getItem('token');
        let loginData = await AsyncStorage.getItem('loginData');
        setLoginDatas(loginData);
        console.log("Token>>", token);

        try {
            const response = await axios.get('https://goes-camera-monitoring-service-webapp-byfhf7enekh7cnbn.eastus-01.azurewebsites.net/users', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': 'application/json',
                },
            });
            console.log("response if>>", response.data);
            setUsersData(response.data.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const getAllDetails = async () => {
        let token = await AsyncStorage.getItem('token');
        try {
            const response = await axios.get('https://goes-camera-monitoring-service-webapp-byfhf7enekh7cnbn.eastus-01.azurewebsites.net/stats', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'accept': 'application/json',
                },
            });
            console.log("stats response>", response.data);
            setStats(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchUsersData();
            getAllDetails();
        }, [selectedTab])
    );

    const openDetailsPage = (userType, item) => {
        if (userType === 'user') {
            navigation.navigate('manageUser', { data: item });
        } else {
            navigation.navigate('manageSchool', { data: item });
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cellname}>{item.name}</Text>
            <Text style={styles.cellname}>{item.login.slice(-10)}</Text>
            <View style={styles.buttons}>
                <Text style={styles.cell}>{item.enabled ? 'Active' : 'InActive'}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => openDetailsPage('user', item)}>
                <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    const ListHeader = () => (
        <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Responsável</Text>
            <Text style={styles.headerCell}>User(ID)</Text>
            <Text style={styles.headerCell}>Status</Text>
            <Text style={styles.headerCell}>Ação</Text>
        </View>
    );

    const renderSchoolItem = ({ item }) => (
        <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Imaages.schoolIcon} style={styles.imageIcon} />
                <Text style={styles.cellname}>{item.responsible}</Text>
            </View>
            <View style={styles.buttons}>
                <Text style={styles.cell}>{item.status}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => openDetailsPage('school')}>
                <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    const onPlusButtonClick = () => {
        if (selectedTab === 'Usuários') {
            navigation.navigate('createUser');
        } else {
            navigation.navigate('AddSchool');
        }
    };

    const onChangeSearch = (text) => {
        console.log("Item is>>", text);
        if (selectedTab === 'Usuários') {
            const filteredData = usersData.filter((item) =>
                item.name.toLowerCase().includes(text.toLowerCase()) || item.login.toLowerCase().includes(text.toLowerCase())
            );
            setUsersData(filteredData);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <HomeHeader showRecords={true} data={loginDatas} usersList={stats} onChange={onChangeSearch} />
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'Usuários' ? styles.activeTab : styles.inactiveTab]}
                    onPress={() => setSelectedTab('Usuários')}
                >
                    <Text style={[selectedTab === 'Usuários' ? styles.activeText : styles.inactiveText]}>Usuários</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, selectedTab === 'Escolas' ? styles.activeTab : styles.inactiveTab]}
                    onPress={() => setSelectedTab('Escolas')}
                >
                    <Text style={[selectedTab === 'Escolas' ? styles.activeText : styles.inactiveText]}>Escolas</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: scaleHeight(50) }}>
                {selectedTab === 'Usuários' ?

                    <FlatList
                        data={usersData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        ListHeaderComponent={ListHeader}
                    /> :
                    <FlatList
                        data={schoolData}
                        renderItem={renderSchoolItem}
                        keyExtractor={item => item.id.toString()}
                    />}
            </View>
            <TouchableOpacity onPress={onPlusButtonClick} style={styles.floatingButton}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: scaleHeight(20),
    },
    tab: {
        flex: 1,
        padding: 10,
        marginHorizontal: scaleWidth(10),
        borderRadius: scaleHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeTab: {
        backgroundColor: '#2A3E97',
    },
    inactiveTab: {
        backgroundColor: '#E5EAFC',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: scaleHeight(10),
        paddingHorizontal: scaleWidth(10),
    },
    cell: {
        flex: 1,
        fontSize: normalizeFont(10),
        color: '#00DF80',
        textAlign: 'center',
    },
    button: {
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(5),
    },
    floatingButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 60,
        height: 60,
        backgroundColor: '#2A3E97',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: '#fff',
    },
    viewDetails: {
        color: '#2A3E97',
        textDecorationLine: 'underline',
        fontSize: normalizeFont(12),
    },
    buttons: {
        flex: 3,
        borderColor: '#00DF80',
        borderWidth: 1,
        padding: scaleHeight(10),
        alignItems: 'center',
        borderRadius: scaleHeight(30),
    },
    cellname: {
        flex: 4,
        fontSize: normalizeFont(12),
        fontFamily: fontFamilies.Mulish.regular,
        color: '#232323',
        textAlign: 'center',
    },
    activeText: {
        color: 'white',
    },
    inactiveText: {
        color: '#232323',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleWidth(10),
        paddingVertical: scaleHeight(10),
        marginVertical: 10,
        backgroundColor: lightColors.background,
    },
    headerCell: {
        flex: 1,
        fontSize: normalizeFont(12),
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    imageIcon: {
        width: 20,
        height: 20,
        marginRight: scaleWidth(10),
    }
});

export default Catlog;