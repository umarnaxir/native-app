import React from 'react';
import { Box, Text } from '../../../../elements';

type EmptyStateProps = {
  message: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <Box paddingHorizontal={16} paddingVertical={24} alignItems="center" justifyContent="center">
      <Text fontSize={14} color="mutedText">
        {message}
      </Text>
    </Box>
  );
};

export default EmptyState;

