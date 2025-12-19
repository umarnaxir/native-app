import React from 'react';
import { Box } from '../../elements';
import { useThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../navigation/TabNavigator';
import TaskList from '../../components/tasks/TaskList';
import ScreenHeader from '../../components/common/ScreenHeader';
import { STRINGS } from '../../utils/constants';

const PendingTasksScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { tasks, updateTask, deleteTask, toggleTaskCompleted, toggleTaskPinned } = useTasks();

  const pendingTasks = tasks.filter((task) => !task.completed);

  const ListHeaderComponent = () => (
    <ScreenHeader
      title={STRINGS.pendingTasksTitle}
      subtitle="Focus on what still needs your attention."
    />
  );

  return (
    <Box flex={1} backgroundColor="background">
      <TaskList
        tasks={pendingTasks}
        onToggleCompleted={toggleTaskCompleted}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onTogglePinned={toggleTaskPinned}
        ListHeaderComponent={ListHeaderComponent}
        onRefresh={async () => {
          // Refresh logic - tasks are already reactive
        }}
      />
    </Box>
  );
};

export default PendingTasksScreen;

