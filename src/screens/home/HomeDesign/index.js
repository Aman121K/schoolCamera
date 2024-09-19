import React, { useRef, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import Video from 'react-native-video'; // Import from react-native-video
import Imaages from "../../../constant/Images";
import HomeHeader from '../../../component/HomeHeader';
import { normalizeFont, scaleHeight, scaleWidth } from '../../../constant/Dimensions';
import { fontFamilies } from '../../../constant/fontsFamilies';
import { BottomSheet } from '@rneui/themed';

const Home = () => {
    const [selectedVideo, setSelectedVideo] = useState(null); // State for the selected video URL
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
    const bottomSheetRef = useRef(null);
    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedVideo(null);
    };

    const data = [
        {
            title: "Escola Horizonte do Saber",
            cameraList: [
                { id: 1, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 2, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 3, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 4, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
            ]
        },
        {
            title: "Escola Horizonte do Saber",
            cameraList: [
                { id: 1, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 2, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 3, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
                { id: 4, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
            ]
        }
    ];

    const renderItems = ({ item }) => (
        <TouchableOpacity style={styles.renderSection} onPress={() => openModal(item.videoUrl)}>
            <Image source={Imaages.classes} style={styles.imageStyle} />

        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.mainSection}>
            <HomeHeader />
            <Text style={styles.textType}>Lista de Cameras</Text>
            {data.map((item, index) => {
                return (
                    <View style={styles.cameraSection}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={Imaages.schoolIcon} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setIsBottomSheetVisible(true)}>
                                <Image source={Imaages.setting} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={item.cameraList}
                            numColumns={2}
                            renderItem={renderItems}
                            keyExtractor={(item) => item.id.toString()}
                            style={{ marginLeft: 10, marginBottom: 10 }}
                        />
                    </View>
                )
            })}
            <BottomSheet
                backdropStyle={styles.bottomSheetBackground}
                modalProps={{}} onBackdropPress={() => setIsBottomSheetVisible(false)} isVisible={isBottomSheetVisible}
            >
                <>
                    <View style={{ backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: scaleHeight(20) }}>
                        <View style={styles.mainBotton}>
                            <Text style={styles.manageText}>Manage Cameras</Text>
                            <TouchableOpacity onPress={() => setIsBottomSheetVisible(false)}>
                                <Image source={Imaages.crossIcons} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.seunText}>Manage users, schools, and cameras by adding, updating, and configuring them to ensure smooth system functionality.</Text>
                        <View>
                            <TouchableOpacity onPress={()=>setIsBottomSheetVisible(false)} style={styles.buttonSection}>
                                <Text style={styles.buttonText}>Manage Cameras</Text>
                                <Image source={Imaages.rightArrow} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setIsBottomSheetVisible(false)} style={styles.buttonSection}>
                                <Text style={styles.buttonText}>Manage Users Access to Cameras</Text>
                                <Image source={Imaages.rightArrow} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            </BottomSheet>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <Pressable style={styles.modalBackground} onPress={closeModal}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        {selectedVideo && (
                            <Video
                                source={{ uri: selectedVideo }}   // Video URL from state
                                style={styles.videoPlayer}
                                controls={true}                    // Show native video controls
                                resizeMode="contain"
                            />
                        )}
                    </View>
                </Pressable>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainSection: { flex: 1 },
    renderSection: { alignItems: 'center', margin: scaleHeight(3) },
    imageStyle: { height: scaleHeight(120), width: scaleWidth(170), borderRadius: 15 },
    nameText: { fontSize: 14, fontWeight: '600', color: '#262525', marginTop: 8 },
    favLike: { position: 'absolute', alignSelf: 'flex-end', right: 5, top: 5 },
    modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: '90%', height: '60%', backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' },
    closeButton: { position: 'absolute', top: 10, right: 10 },
    videoPlayer: { width: '100%', height: '100%' },
    textType: {
        marginVertical: scaleHeight(2),
        color: '#262525',
        fontSize: normalizeFont(20),
        fontWeight: 'bold',
        marginLeft: 15
    },
    cameraSection: {
        backgroundColor: '#EDEDED',
        borderRadius: scaleHeight(15),
        marginHorizontal: scaleWidth(10),
        marginTop: scaleHeight(10)
    },
    title: {
        color: '#262525',
        fontSize: normalizeFont(14),
        fontFamily: fontFamilies.Mulish.semiBold,
        marginLeft: scaleWidth(6)
    },
    videoNaming: {
        flexDirection: 'row',
        position: 'absolute',
        top: 10
    },
    bottomSheetBackground: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    mainBotton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleWidth(30)
    },
    manageText: {
        fontSize: normalizeFont(17),
        fontFamily: fontFamilies.Mulish.semiBold,
        color: '#000000'
    },
    seunText: {
        fontSize: normalizeFont(10),
        color: '#7A7A7A',
        fontFamily: fontFamilies.Mulish.regular,
        alignSelf: 'center',
        marginHorizontal: scaleWidth(20),
        marginVertical: scaleHeight(10)
    },
    buttonSection:{
        flexDirection:'row',
        marginHorizontal:scaleWidth(30),
        borderWidth:1,
        padding:scaleHeight(10),
        borderRadius:scaleWidth(15),
        justifyContent:'space-between',
        marginVertical:scaleHeight(10)
    },
    buttonText:{
        color:'#242736',
        fontSize:normalizeFont(13),
        fontFamily:fontFamilies.Mulish.semiBold
    }
});

export default Home;
