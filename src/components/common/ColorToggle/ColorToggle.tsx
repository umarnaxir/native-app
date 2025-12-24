import React from 'react';
import { Switch } from 'react-native';
import { Box, Text } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';
import { baseColors } from '../../../theme/colors';

const ColorToggle: React.FC = () => {
  const { colors, updateBaseOverrides } = useThemeContext();

  const isGreen = colors.primary.toLowerCase() === baseColors.green.toLowerCase();

  const onToggle = (value: boolean) => {
    updateBaseOverrides({ orange: value ? baseColors.green : baseColors.orange });
  };

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Box flexDirection="row" alignItems="center">
        <Box width={28} height={28} borderRadius={14} backgroundColor="primary" marginRight={12} />
        <Text fontSize={16} fontWeight="500" color="text">Accent color</Text>
      </Box>
      <Switch
        value={isGreen}
        onValueChange={onToggle}
        thumbColor={isGreen ? baseColors.green : baseColors.orange}
        trackColor={{ false: baseColors.orangeSoft, true: baseColors.green }}
      />
    </Box>
  );
};

export default ColorToggle;
