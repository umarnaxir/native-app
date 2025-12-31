import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
