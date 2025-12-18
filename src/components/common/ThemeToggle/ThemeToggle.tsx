import React from 'react';
import { Switch } from 'react-native';
import { Box, Text } from '../../../elements';
import { useThemeContext } from '../../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme, colors } = useThemeContext();

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text fontSize={16} fontWeight="500" color="text">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        thumbColor={isDarkMode ? colors.primary : colors.card}
        trackColor={{ false: colors.border, true: colors.primarySoft }}
      />
    </Box>
  );
};

export default ThemeToggle;

