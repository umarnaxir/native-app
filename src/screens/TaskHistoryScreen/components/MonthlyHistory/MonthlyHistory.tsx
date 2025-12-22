import React from 'react';
import { Box, Text } from '../../../../elements';
import { useThemeContext } from '../../../../context/ThemeContext';
import { MonthlyHistory as MonthlyHistoryType } from '../../../../utils/taskHistory';
import HistoryStatCard from '../HistoryStatCard';
import HistoryEmptyState from '../HistoryEmptyState';

type MonthlyHistoryProps = {
  history: MonthlyHistoryType;
};

const MonthlyHistory: React.FC<MonthlyHistoryProps> = ({ history }) => {
  const { colors } = useThemeContext();

  const formatMonth = (monthStr: string) => {
    const [year, month] = monthStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  if (history.stats.total === 0) {
    return <HistoryEmptyState period="monthly" />;
  }

  return (
    <Box>
      <Box marginBottom={16}>
        <Text fontSize={14} color="mutedText" marginBottom={12}>
          {formatMonth(history.month)}
        </Text>
      </Box>

      <Box
        backgroundColor="card"
        borderColor="border"
        borderWidth={1}
        borderRadius={12}
        padding={16}
      >
        <Text fontSize={16} fontWeight="600" color="text" marginBottom={16}>
          Month Summary
        </Text>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
          <HistoryStatCard label="Total Tasks" value={history.stats.total} />
          <HistoryStatCard label="Completed" value={history.stats.completed} color="success" />
          <HistoryStatCard label="Pending" value={history.stats.pending} color="text" />
          <HistoryStatCard label="Overdue" value={history.stats.overdue} color="danger" />
        </Box>
        <Box marginTop={16} paddingTop={16} borderTopWidth={1} borderTopColor={colors.border}>
          <Text fontSize={14} color="mutedText" marginBottom={4}>
            Completion Rate
          </Text>
          <Text fontSize={32} fontWeight="700" color="success">
            {history.stats.completionPercentage}%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MonthlyHistory;

