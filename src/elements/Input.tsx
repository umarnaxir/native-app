import React from 'react';
import { TextInput, TextInputProps, TextStyle, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

export type InputProps = TextInputProps & {
  variant?: 'default' | 'outline';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
};

const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'medium',
  error = false,
  leftIcon,
  rightIcon,
  onRightIconPress,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const sizeStyles = {
    small: { paddingVertical: 8, paddingHorizontal: 12, fontSize: 14 },
    medium: { paddingVertical: 12, paddingHorizontal: 14, fontSize: 16 },
    large: { paddingVertical: 16, paddingHorizontal: 16, fontSize: 18 },
  };

  const variantStyles: TextStyle = {
    default: {
      backgroundColor: colors.inputBackground,
      borderWidth: 1,
      borderColor: error ? colors.danger : colors.border,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: error ? colors.danger : colors.primary,
    },
  };

  const inputPaddingLeft = leftIcon ? 45 : sizeStyles[size].paddingHorizontal;
  const inputPaddingRight = rightIcon ? 45 : sizeStyles[size].paddingHorizontal;

  return (
    <View style={[styles.container, variantStyles[variant], { borderRadius: 12 }]}>
      {leftIcon && (
        <View style={styles.leftIconContainer}>
          {leftIcon}
        </View>
      )}
      <TextInput
        {...props}
        placeholderTextColor={colors.placeholder}
        style={[
          styles.input,
          {
            color: colors.text,
            ...sizeStyles[size],
            paddingLeft: inputPaddingLeft,
            paddingRight: inputPaddingRight,
          },
          style,
        ]}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.rightIconContainer}
          activeOpacity={onRightIconPress ? 0.7 : 1}
          disabled={!onRightIconPress}
        >
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
  },
  leftIconContainer: {
    position: 'absolute',
    left: 14,
    zIndex: 1,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 14,
    zIndex: 1,
  },
});

export default Input;

