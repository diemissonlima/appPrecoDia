import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useRef, useEffect } from 'react';

export default function CameraViewComponent({ setIsCameraVisible, addPhoto }) {
    const [facing, setFacing] = useState('back');
    const cameraRef = useRef(null);
    const [permission, requestPermission] = useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

    useEffect(() => {
        if (!mediaPermission) {
            requestMediaPermission();
        }
    }, [mediaPermission]);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log('photo', photo);
            setIsCameraVisible(false);
            addPhoto(photo);

            if (mediaPermission?.granted) {
                try {
                    await MediaLibrary.saveToLibraryAsync(photo.uri);
                    console.log('Photo saved to gallery!');
                } catch (error) {
                    console.error('Error saving photo to gallery:', error);
                }
            } else {
                console.log('Media library permission not granted');
            }
        }
    };

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} ref={cameraRef}>
                <View style={styles.viewBtnCaptura}>
                    <TouchableOpacity style={styles.btnPicture} onPress={takePicture}>
                        <Text style={styles.text}>Take Picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPicture} onPress={() => setIsCameraVisible(false)}>
                        <Text style={styles.text}>Close Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    btnPicture: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    viewBtnCaptura: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
});
