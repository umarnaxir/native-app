import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.warn('Error setting storage item', key, error);
  }
};

export const getStorageItem = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue == null) {
      return null;
    }
    return JSON.parse(jsonValue) as T;
  } catch (error) {
    console.warn('Error getting storage item', key, error);
    return null;
  }
};

export const removeStorageItem = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn('Error removing storage item', key, error);
  }
};


