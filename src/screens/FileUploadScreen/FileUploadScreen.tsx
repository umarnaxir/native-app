import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScreenContainer, Text} from '../../elements';

const STORAGE_KEY = 'UPLOADED_IMAGES';

type ImageItem = {
  id: string;
  uri: string;
};

export const FileUploadScreen = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  /* Load saved images */
  useEffect(() => {
    (async () => {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) setImages(JSON.parse(stored));
    })();
  }, []);

  /* Persist images */
  const persistImages = async (data: ImageItem[]) => {
    setImages(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* Pick image for upload card */
  const pickTempImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit: 1,
    });

    if (result.didCancel || !result.assets?.[0]?.uri) return;
    setTempImage(result.assets[0].uri);
  };

  /* Upload image */
  const uploadImage = async () => {
    if (!tempImage) return;

    const newImage: ImageItem = {
      id: Date.now().toString(),
      uri: tempImage,
    };

    persistImages([...images, newImage]);
    setTempImage(null);
  };

  /* Update image */
  const updateImage = async (id: string) => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit: 1,
    });

    if (result.didCancel || !result.assets?.[0]?.uri) return;

    const updated = images.map(img =>
      img.id === id ? {...img, uri: result.assets![0].uri!} : img,
    );

    persistImages(updated);
    setSelectedImage(null);
  };

  /* Delete image */
  const deleteImage = (id: string) => {
    Alert.alert('Delete image?', 'This will remove the image.', [
      {text: 'Cancel'},
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          persistImages(images.filter(img => img.id !== id));
          setSelectedImage(null);
        },
      },
    ]);
  };

  /* Thumbnail item */
  const renderPreview = ({item}: {item: ImageItem}) => (
    <TouchableOpacity
      style={styles.thumbWrapper}
      onPress={() => setSelectedImage(item)}>
      <Image source={{uri: item.uri}} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <ScreenContainer>
      <Text style={styles.header}>File Upload</Text>

      {/* Upload Card */}
      <TouchableOpacity style={styles.uploadCard} onPress={pickTempImage}>
        {tempImage ? (
          <>
            <Image source={{uri: tempImage}} style={styles.uploadPreview} />

            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() => setTempImage(null)}>
              <Text style={{color: '#fff'}}>✕</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadBtn} onPress={uploadImage}>
              <Text style={styles.uploadText}>Upload</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Tap to add image</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Preview Grid */}
      {images.length > 0 && (
        <>
          <Text style={styles.previewTitle}>Preview</Text>
          <FlatList
            data={images}
            keyExtractor={item => item.id}
            renderItem={renderPreview}
            numColumns={3}
            columnWrapperStyle={{gap: 10}}
            contentContainerStyle={{gap: 10, paddingBottom: 40}}
          />
        </>
      )}

      {/* Modal */}
      <Modal visible={!!selectedImage} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {selectedImage && (
              <>
                <Image
                  source={{uri: selectedImage.uri}}
                  style={styles.modalImage}
                />

                <View style={styles.previewActions}>
                  <TouchableOpacity
                    style={styles.updateBtn}
                    onPress={() => updateImage(selectedImage.id)}>
                    <Text style={styles.actionText}>Update</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.deleteBtn}
                    onPress={() => deleteImage(selectedImage.id)}>
                    <Text style={styles.actionText}>Delete</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.modalClose}
                  onPress={() => setSelectedImage(null)}>
                  <Text style={{color: '#fff'}}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    marginBottom: 16,
  },

  uploadCard: {
    height: 200,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#555',
    backgroundColor: '#111',
    marginBottom: 24,
    overflow: 'hidden',
  },

  uploadPreview: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },

  clearBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 6,
  },

  uploadBtn: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#6cb31cff',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
  },

  uploadText: {
    color: '#000000ff',
    fontSize: 14,
  },

  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  placeholderText: {
    opacity: 0.6,
  },

  previewTitle: {
    marginBottom: 12,
    fontSize: 14,
    opacity: 0.7,
  },

  thumbWrapper: {
    flex: 1,
  },

  thumbnail: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCard: {
    width: '90%',
    backgroundColor: '#111',
    borderRadius: 16,
    padding: 16,
  },

  modalImage: {
    height: 260,
    borderRadius: 12,
    marginBottom: 16,
  },

  previewActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  updateBtn: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#30b81eff',
    alignItems: 'center',
  },

  deleteBtn: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#ff4d4d',
    alignItems: 'center',
  },

  actionText: {
    color: '#000000ff',
    fontSize: 13,
  },

  modalClose: {
    marginTop: 12,
    alignSelf: 'center',
  },
});
