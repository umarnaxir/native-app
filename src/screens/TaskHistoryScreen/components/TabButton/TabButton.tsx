import React from 'react';
import { Box, Text, PressableBox } from '../../../../elements';

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
  icon: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onPress, icon }) => {
  return (
    <PressableBox onPress={onPress} flex={1}>
      <Box
        flex={1}
        backgroundColor={isActive ? 'primary' : 'card'}
        borderColor={isActive ? 'primary' : 'border'}
        borderWidth={1}
        borderRadius={12}
        paddingVertical={12}
        paddingHorizontal={16}
        alignItems="center"
        justifyContent="center"
        opacity={isActive ? 1 : 0.7}
      >
        <Box marginBottom={6}>{icon}</Box>
        <Text
          fontSize={13}
          fontWeight={isActive ? '600' : '500'}
          color={isActive ? 'buttonText' : 'text'}
        >
          {label}
        </Text>
      </Box>
    </PressableBox>
  );
};

export default TabButton;

