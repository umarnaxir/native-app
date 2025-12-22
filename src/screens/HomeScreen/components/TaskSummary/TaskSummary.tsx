import React from 'react';
import { Box } from '../../../../elements';
import StatsCard from '../../../../components/common/StatsCard';

type StatItem = {
  label: string;
  value: number;
  valueColor: 'text' | 'danger' | 'success';
};

type TaskSummaryProps = {
  stats: StatItem[];
};

const TaskSummary: React.FC<TaskSummaryProps> = ({ stats }) => {
  return (
    <Box marginBottom={10}>
      <StatsCard stats={stats} />
    </Box>
  );
};

export default TaskSummary;

