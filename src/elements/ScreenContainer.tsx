import React, { useMemo } from 'react';
import { KeyboardAvoidingView, Platform, KeyboardAvoidingViewProps, ViewStyle } from 'react-native';
import Box from './Box';

type ScreenContainerProps = KeyboardAvoidingViewProps & {
  children: React.ReactNode;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, ...props }) => {
  const containerStyle = useMemo<ViewStyle>(() => ({ flex: 1 }), []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={containerStyle}
      {...props}
    >
      <Box flex={1} backgroundColor="background">
        {children}
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ScreenContainer;

