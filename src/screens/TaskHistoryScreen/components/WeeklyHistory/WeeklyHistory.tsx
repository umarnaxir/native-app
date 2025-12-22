import React from 'react';
import { Box, Text } from '../../../../elements';
import { useThemeContext } from '../../../../context/ThemeContext';
import { WeeklyHistory as WeeklyHistoryType } from '../../../../utils/taskHistory';
import HistoryStatCard from '../HistoryStatCard';
import HistoryEmptyState from '../HistoryEmptyState';

type WeeklyHistoryProps = {
  history: WeeklyHistoryType;
};

const WeeklyHistory: React.FC<WeeklyHistoryProps> = ({ history }) => {
  const { colors } = useThemeContext();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    });
  };

  const formatWeekRange = (start: string, end: string) => {
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  if (history.stats.total === 0) {
    return <HistoryEmptyState period="weekly" />;
  }

  return (
    <Box>
      <Box marginBottom={16}>
        <Text fontSize={14} color="mutedText" marginBottom={12}>
          {formatWeekRange(history.weekStart, history.weekEnd)}
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
          Week Summary
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

export default WeeklyHistory;

