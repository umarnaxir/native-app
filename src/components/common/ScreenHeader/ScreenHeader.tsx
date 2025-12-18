import React from 'react';
import { Box, Text } from '../../../elements';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box paddingHorizontal={20} paddingTop={60} paddingBottom={8}>
      <Text fontSize={22} fontWeight="700" color="text">
        {title}
      </Text>
      {subtitle && (
        <Text fontSize={13} color="mutedText" marginTop={4}>
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default ScreenHeader;

