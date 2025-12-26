import React from 'react';
import { Box, Text } from '../../../elements';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  leftIcon?: React.ReactNode;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle, leftIcon }) => {
  return (
    <Box 
      paddingHorizontal={20} 
      paddingTop={60} 
      paddingBottom={8} 
      flexDirection="row" 
      alignItems="center"
    >
      {leftIcon}
      <Box>
        <Text fontSize={22} fontWeight="700" color="text">
          {title}
        </Text>
        {subtitle && (
          <Text fontSize={13} color="mutedText" marginTop={4}>
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default ScreenHeader;

