import React from 'react';
import { Box, Text } from '../../../../elements';

type TasksSectionHeaderProps = {
  totalTasks: number;
};

const TasksSectionHeader: React.FC<TasksSectionHeaderProps> = ({ totalTasks }) => {
  return (
    <Box marginBottom={12}>
      <Text fontSize={16} fontWeight="600" color="text">
        Your Tasks
      </Text>
      <Text fontSize={12} fontFamily="regular" color="mutedText" marginTop={3}>
        {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'} total
      </Text>
    </Box>
  );
};

export default TasksSectionHeader;

