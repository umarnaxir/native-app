import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../../elements';
import {styles} from './fileUpload.styles';

type Props = {
  image: string | null;
  onPick: () => void;
  onClear: () => void;
  onUpload: () => void;
};

export const UploadCard = ({image, onPick, onClear, onUpload}: Props) => (
  <TouchableOpacity style={styles.uploadCard} onPress={onPick}>
    {image ? (
      <>
        <Image source={{uri: image}} style={styles.uploadPreview} />

        <TouchableOpacity style={styles.clearBtn} onPress={onClear}>
          <Text style={{color: '#fff'}}>✕</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadBtn} onPress={onUpload}>
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
      </>
    ) : (
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Tap to add image</Text>
      </View>
    )}
  </TouchableOpacity>
);
