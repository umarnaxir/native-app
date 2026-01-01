import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import {ScreenContainer, Text} from '../../elements';

export const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer style={styles.centeredView}>
      <Modal
        animationType="fade"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            
            <Pressable
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>X</Text>
            </Pressable>

            <Text style={styles.modalTitle}>Welcome 👋</Text>
            <Text style={styles.modalText}>
              This is a modal Box.
              My Name Is Umaaaaaaaar Nazir.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quasi odio omnis optio at possimus error recusandae! 
            </Text>

          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.openButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.openButtonText}>Show Modal</Text>
      </Pressable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    height: 200,
    padding: 20,
    position: 'relative',
    elevation: 10,
    overflow: 'visible',
  },

  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
    zIndex: 20,          
    elevation: 20,
  },

  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000',
  },

  modalText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },

  openButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 40,
  },

  openButtonText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
