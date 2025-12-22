import React from 'react';
import { Box, Text } from '../../../../elements';

type HistoryStatCardProps = {
  label: string;
  value: string | number;
  color?: 'text' | 'success' | 'danger' | 'warning';
  icon?: React.ReactNode;
};

const HistoryStatCard: React.FC<HistoryStatCardProps> = ({
  label,
  value,
  color = 'text',
  icon,
}) => {
  return (
    <Box
      backgroundColor="card"
      borderColor="border"
      borderWidth={1}
      borderRadius={12}
      padding={16}
      flex={1}
      minWidth="45%"
      marginBottom={0}
    >
      {icon && (
        <Box marginBottom={8} alignItems="flex-start">
          {icon}
        </Box>
      )}
      <Text fontSize={24} fontWeight="700" color={color} marginBottom={4}>
        {value}
      </Text>
      <Text fontSize={12} color="mutedText">
        {label}
      </Text>
    </Box>
  );
};

export default HistoryStatCard;

