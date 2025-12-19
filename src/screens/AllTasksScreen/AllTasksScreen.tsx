import React from 'react';
import { Box } from '../../elements';
import { useThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../navigation/TabNavigator';
import TaskList from '../../components/tasks/TaskList';
import ScreenHeader from '../../components/common/ScreenHeader';
import { STRINGS } from '../../utils/constants';

const AllTasksScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { tasks, updateTask, deleteTask, toggleTaskCompleted, toggleTaskPinned } = useTasks();

  const ListHeaderComponent = () => (
    <ScreenHeader
      title={STRINGS.allTasksTitle}
      subtitle="Review and manage everything in one place."
    />
  );

  return (
    <Box flex={1} backgroundColor="background">
      <TaskList
        tasks={tasks}
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

export default AllTasksScreen;

