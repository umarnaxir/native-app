import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScreenContainer, Text} from '../../elements';
import {UploadCard, ImageGrid, ImagePreviewModal} from './components/fileUpload';
import {styles} from './FileUpload.styles';

const STORAGE_KEY = 'UPLOADED_IMAGES';

export type ImageItem = {
  id: string;
  uri: string;
};

export const FileUploadScreen = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(stored => {
      if (stored) setImages(JSON.parse(stored));
    });
  }, []);

  const persistImages = async (data: ImageItem[]) => {
    setImages(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const pickImage = async (cb: (uri: string) => void) => {
    const res = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.8,
      selectionLimit: 1,
    });

    if (res.didCancel || !res.assets?.[0]?.uri) return;
    cb(res.assets[0].uri);
  };

  const uploadImage = () => {
    if (!tempImage) return;
    persistImages([...images, {id: Date.now().toString(), uri: tempImage}]);
    setTempImage(null);
  };

  const updateImage = (id: string) => {
    pickImage(uri => {
      const updated = images.map(img =>
        img.id === id ? {...img, uri} : img,
      );
      persistImages(updated);
      setSelectedImage(null);
    });
  };

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

  return (
    <ScreenContainer>
      <Text style={styles.header}>File Upload</Text>

      <UploadCard
        image={tempImage}
        onPick={() => pickImage(setTempImage)}
        onClear={() => setTempImage(null)}
        onUpload={uploadImage}
      />

      <ImageGrid data={images} onPress={setSelectedImage} />

      <ImagePreviewModal
        image={selectedImage}
        onUpdate={() => updateImage(selectedImage!.id)}
        onDelete={() => deleteImage(selectedImage!.id)}
        onClose={() => setSelectedImage(null)}
      />
    </ScreenContainer>
  );
};
