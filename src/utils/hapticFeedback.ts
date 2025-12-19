import { Platform } from 'react-native';

/**
 * Trigger haptic feedback for task actions
 * Note: For full haptic support, install react-native-haptic-feedback
 * This is a placeholder that can be extended with the package later
 */
export const triggerHaptic = (type: 'light' | 'medium' | 'heavy' | 'success' | 'error' = 'light') => {
  // Placeholder for haptic feedback
  // To enable haptics, install: npm install react-native-haptic-feedback
  // Then uncomment and configure:
  /*
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    const HapticFeedback = require('react-native-haptic-feedback').default;
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };
    HapticFeedback.trigger(type === 'light' ? 'impactLight' : type === 'medium' ? 'impactMedium' : 'impactHeavy', options);
  }
  */
};

