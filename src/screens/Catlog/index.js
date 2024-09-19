import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, StatusBar, Image } from 'react-native';
import HomeHeader from '../../component/HomeHeader';
import { normalizeFont, scaleHeight, scaleWidth } from '../../constant/Dimensions';
import { useNavigation } from '@react-navigation/native';
import Imaages from '../../constant/Images';
import { fontFamilies } from '../../constant/fontsFamilies';

const DATA = [
    { id: '1', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '2', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '3', responsible: 'ABCDEF', userId: '123623', status: 'Inativo' },
    { id: '4', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '5', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
];
const SchoolData = [
    { id: '1', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '2', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '3', responsible: 'ABCDEF', userId: '123623', status: 'Inativo' },
    { id: '4', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
    { id: '5', responsible: 'ABCDEF', userId: '123623', status: 'Ativo' },
]

const Catlog = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Usuários');

    const openDetailsPage = (user) => {
        console.log("user", user)
        if (user === 'user') {
            navigation.navigate('manageUser');
        } else {
            navigation.navigate('manageSchool');
        }

    };

    const renderItem = ({ item }) => (
        <View style={styles.row}>
            <Text style={styles.cellname}>{item.responsible}</Text>
            <Text style={styles.cellname}>{item.userId}</Text>
            <View style={styles.buttons}>
                <Text style={styles.cell}>{item.status}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => openDetailsPage('user')}>
                <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
    const renderSchoolItem = ({ item }) => (
        <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Imaages.schoolIcon} />
                <Text style={styles.cellname}>{item.responsible}</Text>
            </View>
            <View style={styles.buttons}>
                <Text style={styles.cell}>{item.status}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => openDetailsPage('school')}>
                <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
        </View>
    )
    const onPlusButtonClick = () => {
        if (selectedTab === 'Usuários') {
            navigation.navigate('createUser');
        } else {
            navigation.navigate('createSchool');
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <HomeHeader showRecords={true} />
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
                    <Text style={[selectedTab === 'Usuários' ? styles.activeText : styles.inactiveText]}>Escolas</Text>
                </TouchableOpacity>
            </View>
            {selectedTab === 'Usuários' ?
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> :
                <FlatList
                    data={SchoolData}
                    renderItem={renderSchoolItem}
                    keyExtractor={item => item.id}
                />}
            <TouchableOpacity onPress={() => onPlusButtonClick()} style={styles.floatingButton}>
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
        padding: 10,
        marginLeft: scaleWidth(20),
        borderRadius: scaleHeight(50),
    },
    activeTab: {
        backgroundColor: '#2A3E97', // Active tab background
    },
    inactiveTab: {
        backgroundColor: '#E5EAFC', // Inactive tab background (gray)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        marginTop: scaleHeight(10),
        marginHorizontal: scaleWidth(10)
    },
    cell: {
        fontSize: normalizeFont(10),
        color: '#00DF80'
        // flex: 1,
    },
    button: {
        padding: 10,
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
    titleName: {
        fontSize: normalizeFont(12),
        color: 'white',
    },
    buttons: {
        borderColor: '#00DF80',
        borderWidth: 1,
        padding: 10,
        width: scaleWidth(80),
        alignItems: 'center',
        borderRadius: scaleHeight(30)
    },
    cellname: {
        fontSize: normalizeFont(12),
        fontFamily: fontFamilies.Mulish.regular,
        color: '#232323'
    },
    activeText: {
        color: 'white'
    },
    inactiveTab: {
        color: '#232323'
    }
});

export default Catlog;
