import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, ViewStyle } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import Text from './Text';

export type ButtonProps = TouchableOpacityProps & {
  title?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const sizeStyles = {
    small: { paddingVertical: 8, paddingHorizontal: 12, fontSize: 14 },
    medium: { paddingVertical: 12, paddingHorizontal: 16, fontSize: 16 },
    large: { paddingVertical: 16, paddingHorizontal: 20, fontSize: 18 },
  };

  const variantStyles: Record<string, ViewStyle> = {
    primary: {
      backgroundColor: disabled ? colors.mutedText : colors.primary,
    },
    secondary: {
      backgroundColor: disabled ? colors.mutedText : colors.primarySoft,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: disabled ? colors.mutedText : colors.primary,
    },
    ghost: {
      backgroundColor: 'transparent',
    },
    danger: {
      backgroundColor: disabled ? colors.mutedText : colors.danger,
    },
  };

  const textColor = variant === 'outline' || variant === 'ghost' 
    ? (disabled ? colors.mutedText : colors.primary)
    : colors.buttonText;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[
        {
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 8,
          ...sizeStyles[size],
          ...variantStyles[variant],
          ...(fullWidth && { width: '100%' }),
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="small" />
      ) : (
        <>
          {leftIcon}
          {title && (
            <Text color={variant === 'outline' || variant === 'ghost' ? 'primary' : 'buttonText'} fontWeight="600" fontSize={sizeStyles[size].fontSize}>
              {title}
            </Text>
          )}
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;

