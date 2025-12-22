import React from 'react';
import { Box, Text } from '../../../../elements';
import { HistoryPeriod } from '../../../../utils/taskHistory';

type HistoryEmptyStateProps = {
  period: HistoryPeriod;
};

const HistoryEmptyState: React.FC<HistoryEmptyStateProps> = ({ period }) => {
  const periodLabels = {
    daily: 'today',
    weekly: 'this week',
    monthly: 'this month',
  };

  return (
    <Box paddingVertical={40} alignItems="center" justifyContent="center">
      <Text fontSize={16} color="mutedText" marginBottom={8}>
        No activity {periodLabels[period]} yet
      </Text>
      <Text fontSize={14} color="mutedText" textAlign="center">
        Start creating tasks to see your history
      </Text>
    </Box>
  );
};

export default HistoryEmptyState;

