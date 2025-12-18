import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { baseColors } from '../theme/colors';
import Box from './Box';
import Text from './Text';

export type LogoProps = {
  size?: number;
  style?: ViewStyle;
};

const Logo: React.FC<LogoProps> = ({ size = 100, style }) => {
  return (
    <Box
      width={size}
      height={size}
      borderRadius={size / 2}
      justifyContent="center"
      alignItems="center"
      style={[styles.logo, styles.logoBackground, style]}
    >
      <Text
        fontSize={size * 0.48}
        fontWeight="700"
        textAlign="center"
        color="primary"
      >
        U
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  logo: {
    shadowColor: baseColors.orange,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoBackground: {
    backgroundColor: baseColors.orangeLight,
  },
});

export default Logo;

