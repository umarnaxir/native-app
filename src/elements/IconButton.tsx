import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

export type IconButtonProps = TouchableOpacityProps & {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  circular?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'secondary',
  size = 'medium',
  circular = false,
  disabled,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const sizeStyles = {
    small: { width: 32, height: 32 },
    medium: { width: 40, height: 40 },
    large: { width: 48, height: 48 },
  };

  const variantStyles: Record<string, ViewStyle> = {
    primary: {
      backgroundColor: disabled ? colors.mutedText : colors.primary,
    },
    secondary: {
      backgroundColor: disabled ? colors.mutedText : colors.primarySoft,
    },
    ghost: {
      backgroundColor: 'transparent',
    },
    danger: {
      backgroundColor: disabled ? colors.mutedText : colors.danger,
    },
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        {
          ...sizeStyles[size],
          borderRadius: circular ? sizeStyles[size].width / 2 : 10,
          alignItems: 'center',
          justifyContent: 'center',
          ...variantStyles[variant],
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;

