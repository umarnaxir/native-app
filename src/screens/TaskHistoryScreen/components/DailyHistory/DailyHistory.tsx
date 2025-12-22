import React from 'react';
import { Calendar, TrendingUp } from 'lucide-react-native';
import { Box, Text } from '../../../../elements';
import { useThemeContext } from '../../../../context/ThemeContext';
import { DailyHistory as DailyHistoryType } from '../../../../utils/taskHistory';
import HistoryStatCard from '../HistoryStatCard';
import HistoryEmptyState from '../HistoryEmptyState';

type DailyHistoryProps = {
  history: DailyHistoryType;
};

const DailyHistory: React.FC<DailyHistoryProps> = ({ history }) => {
  const { colors } = useThemeContext();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined,
    });
  };

  if (history.stats.total === 0 && history.tasksCreated === 0) {
    return <HistoryEmptyState period="daily" />;
  }

  return (
    <Box>
      <Box marginBottom={16}>
        <Text fontSize={14} color="mutedText" marginBottom={12}>
          {formatDate(history.date)}
        </Text>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="space-between" gap={12}>
          <HistoryStatCard
            label="Tasks Created"
            value={history.tasksCreated}
            color="text"
            icon={<Calendar size={18} color={colors.primary} />}
          />
          <HistoryStatCard
            label="Tasks Completed"
            value={history.tasksCompleted}
            color="success"
            icon={<TrendingUp size={18} color={colors.success} />}
          />
        </Box>
      </Box>

      <Box
        backgroundColor="card"
        borderColor="border"
        borderWidth={1}
        borderRadius={12}
        padding={16}
      >
        <Text fontSize={16} fontWeight="600" color="text" marginBottom={16}>
          Overall Statistics
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

export default DailyHistory;

