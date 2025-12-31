import React from 'react';
import {Modal, View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../../../elements';
import {ImageItem} from '../../../FileUploadScreen';
import {styles} from './fileUpload.styles';

type Props = {
  image: ImageItem | null;
  onUpdate: () => void;
  onDelete: () => void;
  onClose: () => void;
};

export const ImagePreviewModal = ({
  image,
  onUpdate,
  onDelete,
  onClose,
}: Props) => (
  <Modal visible={!!image} transparent animationType="fade">
    <View style={styles.modalOverlay}>
      {image && (
        <View style={styles.modalCard}>
          <Image source={{uri: image.uri}} style={styles.modalImage} />

          <View style={styles.previewActions}>
            <TouchableOpacity style={styles.updateBtn} onPress={onUpdate}>
              <Text style={styles.actionText}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn} onPress={onDelete}>
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.modalClose} onPress={onClose}>
            <Text style={{color: '#fff'}}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  </Modal>
);
