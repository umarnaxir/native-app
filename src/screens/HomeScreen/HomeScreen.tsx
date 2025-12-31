import React, { useMemo } from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../navigation/TabNavigator';
import { useTaskForm } from '../../hooks';
import { ScreenContainer } from '../../elements';
import TaskList from '../../components/tasks/TaskList';
import HomeHeader from './components/HomeHeader';
import { STRINGS } from '../../utils/constants';

const CONTAINER_PADDING = 16;

const HomeScreen: React.FC = () => {
  const { colors } = useThemeContext();
  const { tasks, addTask, updateTask, deleteTask, toggleTaskCompleted, toggleTaskPinned, showTemporaryTasks } = useTasks();
  const { title, setTitle, isSubmitting, handleSubmit } = useTaskForm(addTask);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  const stats = useMemo(
    () => [
      { label: 'Total', value: totalTasks, valueColor: 'text' as const },
      { label: 'Pending', value: pendingTasks, valueColor: 'text' as const },
      { label: 'Completed', value: completedTasks, valueColor: 'success' as const },
    ],
    [totalTasks, pendingTasks, completedTasks]
  );

  const ListHeaderComponent = useMemo(
    () => (
      <HomeHeader
        title={title}
        setTitle={setTitle}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        stats={stats}
        buttonTextColor={colors.buttonText}
        greetingText="Hey! Umar"
        subtitleText="Stay on top of your day with a focused task list."
        placeholder={STRINGS.addTaskPlaceholder}
        buttonText={STRINGS.addTaskButton}
        greetingFontFamily="meowScript"
      />
    ),
    [title, setTitle, isSubmitting, handleSubmit, stats, colors.buttonText]
  );

  return (
    <ScreenContainer>
      <TaskList
        tasks={tasks}
        onToggleCompleted={toggleTaskCompleted}
        onUpdate={updateTask}
        onDelete={deleteTask}
        onTogglePinned={toggleTaskPinned}
        ListHeaderComponent={ListHeaderComponent}
        containerPadding={CONTAINER_PADDING}
        onRefresh={async () => {
          await showTemporaryTasks(5000);
        }}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;