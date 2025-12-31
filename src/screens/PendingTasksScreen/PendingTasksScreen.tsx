import React from 'react';
import { Box, IconButton } from '../../elements';
import { useThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../navigation/TabNavigator';
import TaskList from '../../components/tasks/TaskList';
import ScreenHeader from '../../components/common/ScreenHeader';
import { STRINGS } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const PendingTasksScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { tasks, updateTask, deleteTask, toggleTaskCompleted, toggleTaskPinned, showTemporaryTasks } = useTasks();
  const navigation = useNavigation();

  const pendingTasks = tasks.filter((task) => !task.completed);

  const ListHeaderComponent = () => (
    <ScreenHeader
      title={STRINGS.pendingTasksTitle}
      subtitle="Focus on what still needs your attention."
      leftIcon={
        <IconButton
          icon="menu"
          variant="ghost"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          color={colors.text}
          size={24}
          style={{ width: 24, height: 24, padding: 0 }}
        />
      }
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
          await showTemporaryTasks(5000);
        }}
      />
    </Box>
  );
};

export default PendingTasksScreen;

