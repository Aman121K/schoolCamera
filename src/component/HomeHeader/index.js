import React from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import Imaages from "../../constant/Images";
import Search from "../../constant/CustomSearch";
import { normalizeFont, scaleHeight, scaleWidth } from "../../constant/Dimensions";
import { fontFamilies } from "../../constant/fontsFamilies";

const HomeHeader = ({ showRecords,data,usersList,schoolList,onChange}) => {
    // Function to get greeting based on time
    console.log("data on home page>",data,usersList)
    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Good Afternoon";
        } else if (currentHour >= 18 && currentHour < 22) {
            return "Good Evening";
        } else {
            return "Good Night";
        }
    };

    return (
        <View style={style.mainSection}>
            <View style={style.subMainSection}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image source={Imaages.menu} />
                    </View>
                </View>
                <View>
                    <Image source={Imaages.Account} />
                </View>
            </View>
            <View style={style.nameSection}>
                <Text style={style.nameText}>{getGreeting()}</Text>
                <Text style={style.subNameText}>Welcome {data?.name}</Text>
            </View>
            {showRecords &&
                <View style={style.socialSection}>
                    <View>
                        <Text style={style.names}>Usuários</Text>
                        <Text style={style.records}>{usersList.totalUsers}</Text>
                    </View>
                    <View>
                        <Text style={style.names}>Escolas</Text>
                        <Text style={style.records}>{usersList.totalSchools}</Text>
                    </View>
                    <View>
                        <Text style={style.names}>Câmeras</Text>
                        <Text style={style.records}>{usersList.totalClassrooms}</Text>
                    </View>
                </View>
            }
            <Search  onChange={onChange}/>
        </View>
    )
}

export default HomeHeader;

const style = StyleSheet.create({
    mainSection: {
        backgroundColor: '#2A3E97',
        paddingVertical: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: scaleHeight(30)
    },
    subMainSection: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: normalizeFont(13),
        color: 'white',
        fontFamily: fontFamilies.Mulish.regular,
    },
    subNameText: {
        fontSize: normalizeFont(16),
        color: 'white',
        fontFamily: fontFamilies.Mulish.bold,
        marginVertical: scaleHeight(5)
    },
    nameSection: {
        marginLeft: scaleWidth(30)
    },
    socialSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(30),
        marginVertical: scaleHeight(10)
    },
    names: {
        fontFamily: fontFamilies.Mulish.regular,
        fontSize: normalizeFont(13),
        color: 'white'
    },
    records: {
        fontSize: normalizeFont(16),
        color: 'white',
        fontFamily: fontFamilies.Mulish.semiBold
    }
});