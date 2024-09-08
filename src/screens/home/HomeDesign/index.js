import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import Video from 'react-native-video'; // Import from react-native-video
import Imaages from "../../../constant/Images";
import HomeHeader from '../../../component/HomeHeader';

const Home = () => {
    const [selectedVideo, setSelectedVideo] = useState(null); // State for the selected video URL
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedVideo(null);
    };

    const data = [
        { id: 1, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 2, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 3, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 4, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 5, name: 'Escola Valley-Cam 1', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 6, name: 'Escola Valley-Cam 2', thumbnail: 'https://via.placeholder.com/150', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        // More data items here...
    ];

    const renderItems = ({ item }) => (
        <TouchableOpacity style={styles.renderSection} onPress={() => openModal(item.videoUrl)}>
            <Image source={{ uri: item.thumbnail }} style={styles.imageStyle} />
            <Text style={styles.nameText}>{item.name}</Text>
            <TouchableOpacity style={styles.favLike}>
                <Image source={Imaages.Favlike} />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.mainSection}>
            <HomeHeader />
            {/* <View style={{marginLeft:10}}> */}
            <Text style={styles.textType}>Lista de Cameras</Text>

            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItems}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginLeft: 10 }}
            />
            {/* </View> */}

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
    renderSection: { alignItems: 'center', margin: 10 },
    imageStyle: { height: 165, width: 165, borderRadius: 15 },
    nameText: { fontSize: 14, fontWeight: '600', color: '#262525', marginTop: 8 },
    favLike: { position: 'absolute', alignSelf: 'flex-end', right: 5, top: 5 },
    modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' },
    modalContent: { width: '90%', height: '60%', backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' },
    closeButton: { position: 'absolute', top: 10, right: 10 },
    videoPlayer: { width: '100%', height: '100%' },
    textType: {
        marginBottom: 15,
        color: '#262525',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
});

export default Home;
