import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {ImageItem} from '../types/fileUpload';

const STORAGE_KEY = 'UPLOADED_IMAGES';

export const useImageStorage = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(data => {
      if (data) setImages(JSON.parse(data));
    });
  }, []);

  const persist = async (data: ImageItem[]) => {
    setImages(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const pickImage = async (cb: (uri: string) => void) => {
    const res = await launchImageLibrary({mediaType: 'photo'});
    if (res.assets?.[0]?.uri) cb(res.assets[0].uri);
  };

  return {
    images,
    tempImage,
    selectedImage,
    setTempImage,
    setSelectedImage,
    persist,
    pickImage,
  };
};
