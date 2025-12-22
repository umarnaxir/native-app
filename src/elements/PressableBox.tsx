import React from 'react';
import { Pressable, PressableProps } from 'react-native';
import Box from './Box';
import type { BoxProps } from './Box';

type PressableBoxProps = PressableProps & BoxProps;

const PressableBox: React.FC<PressableBoxProps> = ({ children, ...props }) => {
  const {
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    disabled,
    hitSlop,
    pressRetentionOffset,
    android_ripple,
    android_disableSound,
    delayLongPress,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    ...boxProps
  } = props;

  const pressableProps: PressableProps = {
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    disabled,
    hitSlop,
    pressRetentionOffset,
    android_ripple,
    android_disableSound,
    delayLongPress,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
  };

  return (
    <Pressable {...pressableProps}>
      <Box {...boxProps}>{children}</Box>
    </Pressable>
  );
};

export default PressableBox;

