import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import {ImageItem} from '../../../FileUploadScreen';
import {styles} from './fileUpload.styles';

type Props = {
  data: ImageItem[];
  onPress: (item: ImageItem) => void;
};

export const ImageGrid = ({data, onPress}: Props) => (
  <FlatList
    data={data}
    numColumns={3}
    keyExtractor={i => i.id}
    columnWrapperStyle={{gap: 10}}
    contentContainerStyle={{gap: 10, paddingBottom: 40}}
    renderItem={({item}) => (
      <TouchableOpacity
        style={styles.thumbWrapper}
        onPress={() => onPress(item)}>
        <Image source={{uri: item.uri}} style={styles.thumbnail} />
      </TouchableOpacity>
    )}
  />
);
