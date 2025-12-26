import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import * as Icons from 'lucide-react-native';
import { useThemeContext } from '../context/ThemeContext';

export type IconButtonProps = TouchableOpacityProps & {
  icon: keyof typeof Icons | React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: number | 'small' | 'medium' | 'large';
  color?: string;
  circular?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'secondary',
  size = 24,
  color,
  circular = false,
  disabled,
  style,
  ...props
}) => {
  const { colors } = useThemeContext();

  const numericSize = typeof size === 'number'
    ? size
    : size === 'small'
    ? 18
    : size === 'large'
    ? 28
    : 24;

  const sizeStyles = {
    width: numericSize * 1.5,
    height: numericSize * 1.5,
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
          ...sizeStyles,
          borderRadius: circular ? sizeStyles.width / 2 : 10,
          alignItems: 'center',
          justifyContent: 'center',
          ...variantStyles[variant],
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      {/* Resolve icon node: accept React element or lucide icon name */}
      {
        (() => {
          if (React.isValidElement(icon)) {
            return icon;
          }
          if (typeof icon === 'string' && (Icons as any)[icon]) {
            const IconComp = (Icons as any)[icon] as React.ComponentType<any>;
            return <IconComp color={color || colors.text} size={numericSize} />;
          }
          return null;
        })()
      }
    </TouchableOpacity>
  );
};

export default IconButton;

